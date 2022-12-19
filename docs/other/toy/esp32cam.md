--- 
title: ESP32-CAM 无线摄像头
date: 2022-12-19 11:14:41
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 硬件
tags: 
 - 开发板
 - esp32
 - esp32-cam
 - 摄像头
publish: true
# autoGroup-1: 
# autoPrev: 
---

最近几个月较忙（VR游戏真好玩），顺便补上了几个硬件类设备的复刻，利用ESP32-CAM开发板做简单的局域网监控，并且支持了默认WiFi连接失败允许手动配网功能
<!-- more -->

这个项目较为简单，在`Arduino`上就自带了该开发板的实力代码

就是在原本代码上引用了 `WiFiManager` 库进行手动配网，可以按照需求进行修改应用

将 `CameraWebServer.ino` 稍微修改为以下即可

``` c
#include "esp_camera.h"
#include <WiFi.h>
#include <WiFiManager.h> 

WiFiManager wifiManager;

//
// WARNING!!! PSRAM IC required for UXGA resolution and high JPEG quality
//            Ensure ESP32 Wrover Module or other board with PSRAM is selected
//            Partial images will be transmitted if image exceeds buffer size
//

// Select camera model
//#define CAMERA_MODEL_WROVER_KIT // Has PSRAM
//#define CAMERA_MODEL_ESP_EYE // Has PSRAM
//#define CAMERA_MODEL_M5STACK_PSRAM // Has PSRAM
//#define CAMERA_MODEL_M5STACK_V2_PSRAM // M5Camera version B Has PSRAM
//#define CAMERA_MODEL_M5STACK_WIDE // Has PSRAM
//#define CAMERA_MODEL_M5STACK_ESP32CAM // No PSRAM
//#define CAMERA_MODEL_M5STACK_UNITCAM // No PSRAM
#define CAMERA_MODEL_AI_THINKER // Has PSRAM
//#define CAMERA_MODEL_TTGO_T_JOURNAL // No PSRAM

#include "camera_pins.h"

// 输入默认的WiFi账号密码，错误将启动手动配网功能，热点名称AutoConnectAP密码123456789
const char* ssid = "";
const char* password = "";

void startCameraServer();

static uint32_t lastWiFiCheckTick = 0; //定义时间变量

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  
  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(psramFound()){
    config.frame_size = FRAMESIZE_UXGA;
    config.jpeg_quality = 10;
    config.fb_count = 2;
  } else {
    config.frame_size = FRAMESIZE_SVGA;
    config.jpeg_quality = 12;
    config.fb_count = 1;
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t * s = esp_camera_sensor_get();
  // initial sensors are flipped vertically and colors are a bit saturated
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1); // flip it back
    s->set_brightness(s, 1); // up the brightness just a bit
    s->set_saturation(s, -2); // lower the saturation
  }
  // drop down frame size for higher initial frame rate
  s->set_framesize(s, FRAMESIZE_QVGA);

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

  WiFi.begin(ssid, password);

//  while (WiFi.status() != WL_CONNECTED) {
//    delay(500);
//    Serial.print(".");
//  }
  if (WiFi.status() != WL_CONNECTED )
    {
      Serial.println("默认WiFi连接失败");
    }
    else
    {
     Serial.println("默认WiFi连接成功 ");
     delay(1000);
    Serial.printf("Heap size:%d\r\n", ESP.getFreeHeap());
    Serial.println("");
    Serial.println("WiFi connected");
    }
 while( WiFi.status()!= WL_CONNECTED ) 
  {//等待配网
     if (millis() - lastWiFiCheckTick > 1000) {
          lastWiFiCheckTick = millis();//获取运行时间
        }
        //提示配网
       Serial.println("开始热点配网....");
       wifiManager.setConfigPortalTimeout(60);//将到期超时设置为60秒
       if(wifiManager.autoConnect("AutoConnectAP", "123456789")) //创建的wifi 名称和密码
      {
        // WiFi连接成功后将通过串口监视器输出连接成功信息
        Serial.println("");
        Serial.print("ESP32 Connected to ");
        Serial.println(WiFi.SSID());              // WiFi名称
        Serial.print("IP address:\t");
        Serial.println(WiFi.localIP());           // IP
       
        startCameraServer();
      }
      else{
        Serial.println(F("Failed to connect. Reset and try again. . ."));
        delay(1000);
        //ESP.reset();
      }
    } 

  Serial.println("");
  Serial.println("WiFi connected");

  startCameraServer();

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");
}

void loop() {
  // put your main code here, to run repeatedly:
  delay(10000);
}

```
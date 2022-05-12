---
title: finalshell 实用SSH连接工具破解
date: 2022-05-12 16:04:30
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 后端
tags: 
 - linux
 - ssh
publish: true
---

1. 官网下载完随便输入用户名和密码选择离线激活
2. 复制好本机码
3. 找个地方运行以下Java代码输入本机码会返回激活码
4. 粘贴回就能激活成功


``` java
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Scanner;


class FinalShell {
    public static void main(String[] args) throws NoSuchAlgorithmException, IOException {
        System.out.print("请输入FinalShell的离线机器码：");
        Scanner reader = new Scanner(System.in);
        String machineCode = reader.nextLine();
        generateKey(machineCode);
    }

    public static void generateKey(String hardwareId) throws NoSuchAlgorithmException {
        String proKey = transform(61305 + hardwareId + 8552);
        String pfKey = transform(2356 + hardwareId + 13593);
        System.out.println("高级版激活码：请将此行复制到离线激活中：" + proKey);
        System.out.println("专业版激活码："+pfKey);
    }

    public static String transform(String str) throws NoSuchAlgorithmException {

        String md5 = hashMD5(str);

        return hashMD5(str).substring(8, 24);
    }

    public static String hashMD5(String str) throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance("MD5");
        byte[] hashed = digest.digest(str.getBytes());
        StringBuilder sb = new StringBuilder();
        for (byte b : hashed) {
            int len = b & 0xFF;
            if (len < 16) {
                sb.append("0");
            }
            sb.append(Integer.toHexString(len));
        }
        return sb.toString();
    }
}

```
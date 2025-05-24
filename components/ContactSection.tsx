"use client";
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-orange-600">联系我们</h2>
        <p className="text-gray-600 mb-8">如有合作意向或业务咨询，欢迎随时联系我们</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=zhchen2000@foxmail.com&subject=业务咨询&body=您好，我想咨询贵公司的相关业务。"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition text-lg font-semibold"
          >
            发送邮件
          </a>
          <a
            href="/chat"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition text-lg font-semibold"
          >
            在线咨询
          </a>
        </div>
      </div>
    </section>
  );
} 
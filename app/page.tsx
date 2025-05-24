import React from 'react';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 导航栏 */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">南京橙龙科技有限公司</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#about" className="text-gray-600 hover:text-orange-600">公司简介</a>
              <a href="#team" className="text-gray-600 hover:text-orange-600">核心团队</a>
              <a href="#business" className="text-gray-600 hover:text-orange-600">主营业务</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600">联系我们</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white py-24 relative overflow-hidden shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg tracking-wide">南京橙龙科技有限公司</h2>
          <p className="text-2xl mb-10 drop-shadow-lg font-medium">专注于科技推广、出版与教育服务的创新型企业</p>
        </div>
      </section>

      {/* 公司简介 */}
      <section id="about" className="py-16 bg-white border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-600 tracking-wide">公司简介</h2>
          <p className="text-gray-700 text-lg leading-8 text-center bg-orange-50 rounded-xl p-8 shadow-sm">南京橙龙科技有限公司成立于2024年10月，注册地位于江苏省南京市秦淮区光华路街道光华路127号3层304F室，是一家以从事科技推广和应用服务业为主的中小微企业，经营范围包括书籍出版、专利转让、技术推广、技术服务、技术咨询、教育咨询（中介服务除外）等。</p>
        </div>
      </section>

      {/* 核心团队 */}
      <section id="team" className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50 border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-600 tracking-wide">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2 text-orange-700">董事长：陈志皓 先生</h3>
              <p className="text-gray-700">现就读于南京理工大学电子工程与光电技术学院，通信工程硕士。</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2 text-orange-700">总经理：吴加成 女士</h3>
              <p className="text-gray-700">具有非常丰富的出版经验与图书市场化经验，同时还是浙江出版协会的副会长。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 主营业务 */}
      <section id="business" className="py-16 bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-600 tracking-wide">主营业务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <a href="/business/llm" className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition block border border-orange-100 group relative overflow-hidden hover:-translate-y-1 hover:scale-105 duration-200">
              <h3 className="text-xl font-bold mb-4 text-center text-orange-700 group-hover:text-orange-600 transition">大模型开发教学</h3>
              <div className="h-1 w-10 bg-orange-200 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 text-center">涵盖大模型开发的教学书籍、教学视频及配套软件产品，助力人工智能领域人才培养。</p>
            </a>
            <a href="/business/embedded" className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition block border border-orange-100 group relative overflow-hidden hover:-translate-y-1 hover:scale-105 duration-200">
              <h3 className="text-xl font-bold mb-4 text-center text-orange-700 group-hover:text-orange-600 transition">嵌入式开发教学</h3>
              <div className="h-1 w-10 bg-orange-200 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 text-center">提供嵌入式开发相关的教学书籍、教学视频及配套软件产品，服务高校与企业培训。</p>
            </a>
            <a href="/business/publish" className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition block border border-orange-100 group relative overflow-hidden hover:-translate-y-1 hover:scale-105 duration-200">
              <h3 className="text-xl font-bold mb-4 text-center text-orange-700 group-hover:text-orange-600 transition">科技出版与专利服务</h3>
              <div className="h-1 w-10 bg-orange-200 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 text-center">专业的书籍出版、专利转让、技术推广、技术服务与咨询。</p>
            </a>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50">
        <ContactSection />
      </div>

      {/* 页脚 */}
      <footer className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-8 mt-8 rounded-t-3xl shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">公司信息</h3>
              <p className="text-orange-100">南京橙龙科技有限公司，专注于科技推广、出版与教育服务。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-orange-100 hover:text-white">公司简介</a></li>
                <li><a href="#team" className="text-orange-100 hover:text-white">核心团队</a></li>
                <li><a href="#business" className="text-orange-100 hover:text-white">主营业务</a></li>
                <li><a href="#contact" className="text-orange-100 hover:text-white">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <ul className="space-y-2 text-orange-100">
                <li>邮箱：contact@cltech.com</li>
                <li>电话：025-1234-5678</li>
                <li>地址：江苏省南京市秦淮区光华路街道光华路127号3层304F室</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-orange-200 text-center text-orange-100">
            <p>&copy; 2024 南京橙龙科技有限公司. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 
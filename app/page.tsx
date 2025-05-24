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



      {/* 公司高管 */}
      <section id="team" className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50 border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-600 tracking-wide">公司高管</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2 text-orange-700">董事长：陈志皓 先生</h3>
              <p className="text-gray-700 leading-relaxed">陈志皓先生在大模型开发与前沿科技研究领域拥有深厚的造诣与丰富的实践经验。他在人工智能、自然语言处理及高性能计算等方向取得了显著科研成果，致力于将前沿技术转化为创新产品与教学资源，引领公司在科技创新领域不断探索前行。</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2 text-orange-700">总经理：吴加成 女士</h3>
              <p className="text-gray-700 leading-relaxed">吴加成女士是资深出版行业专家及杰出职业经理人，拥有丰富的图书市场化运作经验。她精准把握行业脉搏，擅长团队建设与运营管理，在推动公司业务发展和品牌建设方面发挥关键作用。同时，吴加成女士兼任董事长秘书一职，协助董事长处理重要事务。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 公司核心成员 */}
      <section className="py-16 bg-white border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-600 tracking-wide">公司核心成员</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-xl shadow-md border border-orange-100">
              <h4 className="text-lg font-semibold mb-2 text-orange-700">保安队长：旺财</h4>
              <p className="text-gray-700">作为公司最忠实的伙伴，旺财负责守护公司安全，以饱满的热情迎接每一位到访者，是公司不可或缺的一员。</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl shadow-md border border-orange-100">
              <h4 className="text-lg font-semibold mb-2 text-orange-700">前端工程师：菜菜龙</h4>
              <p className="text-gray-700">菜菜龙专注于打造用户友好的界面和流畅的交互体验，用精湛的前端技术呈现公司形象与服务。</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl shadow-md border border-orange-100">
              <h4 className="text-lg font-semibold mb-2 text-orange-700">后端工程师：小狼</h4>
              <p className="text-gray-700">小狼构建稳健高效的后台服务，为网站各项功能提供强大的技术支撑，是公司业务稳定运行的基石。</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl shadow-md border border-orange-100">
              <h4 className="text-lg font-semibold mb-2 text-orange-700\">技术支持专家：鲨鲨</h4>
              <p className="text-gray-700">鲨鲨凭借深厚的技术积累，为客户提供专业的技术咨询与支持服务，耐心解答疑问，确保用户获得最佳体验。</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl shadow-md border border-orange-100">
              <h4 className="text-lg font-semibold mb-2 text-orange-700\">客服：旦旦</h4>
              <p className="text-gray-700">旦旦以真诚热情的服务态度，在线解答客户疑问，收集用户反馈，是公司与客户沟通的重要桥梁。</p>
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
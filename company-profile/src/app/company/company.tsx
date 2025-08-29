"use client"

import React, { JSX } from "react";

export default function CompanyProfile(): JSX.Element {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 antialiased">
            <header className="fixed w-full z-30 bg-white/60 backdrop-blur-sm border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg">SI</div>
                        <div>
                            <div className="font-semibold">Synthetix Industries</div>
                            <div className="text-xs text-slate-500">Smart products · human impact</div>
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
                        <a href="#about" className="hover:text-indigo-600">About</a>
                        <a href="#services" className="hover:text-indigo-600">Services</a>
                        <a href="#work" className="hover:text-indigo-600">Work</a>
                        <a href="#team" className="hover:text-indigo-600">Team</a>
                        <a href="#contact" className="hover:text-indigo-600">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="pt-28">
                {/* HERO */}
                <section className="relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Synthetix Industries</h1>
                            <p className="text-lg text-slate-600 max-w-xl">
                                我們以合成智慧、資料與設計融合，打造對人更友好的工業產品與企業服務。
                                從原型到量產，我們縮短時間與成本，讓客戶專注於商業價值。
                            </p>

                            <div className="flex gap-4">
                                <a href="#contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow hover:scale-[1.02] transition">聯絡我們</a>
                                <a href="#work" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-800 font-medium shadow-sm hover:shadow-md transition">查看作品</a>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
                                <div className="px-3 py-2 bg-white rounded-full border">設計驅動 · 數據導向</div>
                                <div className="px-3 py-2 bg-white rounded-full border">快速原型</div>
                                <div className="px-3 py-2 bg-white rounded-full border">企業整合</div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -right-20 -top-10 w-72 h-72 rounded-2xl bg-gradient-to-br from-cyan-200 via-indigo-200 to-purple-200 blur-3xl opacity-50 transform rotate-12"></div>

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1526378722699-33f95b1a0b4d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="office" className="w-full h-80 object-cover" />
                                <div className="p-6">
                                    <div className="text-sm text-slate-500">最新成果</div>
                                    <div className="mt-3 font-semibold text-lg">SYN-X 小型智慧感測器 · 工業版</div>
                                    <p className="mt-2 text-sm text-slate-600">低功耗、模組化設計，能快速整合現有工廠與雲端分析平台。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold">關於我們</h2>
                            <p className="mt-4 text-slate-600 max-w-2xl">
                                Synthetix Industries 成立於 2018 年，專注於把硬體、韌體與雲端資料分析結合，為中大型製造業提供智慧化升級方案。
                                我們的團隊橫跨工業設計、嵌入式開發、資料工程與 UX 設計，致力於以最短的時間驗證商業假設並交付可量產的產品。
                            </p>

                            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
                                <div className="p-4 bg-white rounded-xl shadow border">
                                    <div className="text-2xl font-bold">120+</div>
                                    <div className="text-sm text-slate-500">客戶案</div>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow border">
                                    <div className="text-2xl font-bold">8</div>
                                    <div className="text-sm text-slate-500">國際夥伴</div>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow border">
                                    <div className="text-2xl font-bold">15</div>
                                    <div className="text-sm text-slate-500">專利</div>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow border">
                                    <div className="text-2xl font-bold">4</div>
                                    <div className="text-sm text-slate-500">年平均成長</div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="p-6 bg-gradient-to-br from-indigo-600 to-cyan-400 text-white rounded-2xl shadow-lg">
                                <h3 className="font-semibold">我們的使命</h3>
                                <p className="mt-3 text-sm">簡化複雜世界，創造可量產且有價值的智慧產品。</p>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li>以人為本的工業設計</li>
                                    <li>模組化與可維護性</li>
                                    <li>資料驅動決策</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section id="services" className="bg-slate-50 border-t border-slate-100">
                    <div className="max-w-6xl mx-auto px-6 py-16">
                        <h2 className="text-3xl font-bold">我們的服務</h2>
                        <p className="mt-3 text-slate-600 max-w-2xl">從概念驗證到量產，我們提供一條龍服務：</p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "產品設計 & 原型",
                                    desc: "快速將想法變成可測試的原型，包含工業設計與韌體原型。",
                                },
                                {
                                    title: "嵌入式開發",
                                    desc: "低功耗韌體、模組化硬體，支援 OTA 更新與可靠性測試。",
                                },
                                {
                                    title: "後端 & 資料分析",
                                    desc: "從邊緣資料收集到雲端串接，建立可視化與預測模型。",
                                },
                            ].map((s) => (
                                <div key={s.title} className="p-6 bg-white rounded-2xl shadow border hover:shadow-lg transition">
                                    <div className="text-indigo-600 font-semibold">{s.title}</div>
                                    <p className="mt-3 text-slate-600 text-sm">{s.desc}</p>
                                    <div className="mt-4">
                                        <a href="#contact" className="text-sm font-medium text-indigo-600 hover:underline">洽詢服務 →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WORK / Portfolio */}
                <section id="work" className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold">案例作品</h2>
                    <p className="mt-3 text-slate-600">部分代表性計畫與合作產品。</p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {new Array(3).fill(0).map((_, i) => (
                            <article key={i} className="rounded-2xl overflow-hidden bg-white shadow border hover:scale-[1.02] transition">
                                <img src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder`} alt={`case-${i}`} className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <h3 className="font-semibold">專案 {i + 1} · 工廠智慧化</h3>
                                    <p className="mt-2 text-sm text-slate-600">協助客戶構建設備監控系統，降低停機時間與維護成本。</p>
                                    <div className="mt-4 text-sm">
                                        <a className="text-indigo-600 font-medium hover:underline" href="#contact">了解更多</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* TEAM */}
                <section id="team" className="bg-slate-50 border-t border-slate-100">
                    <div className="max-w-6xl mx-auto px-6 py-16">
                        <h2 className="text-3xl font-bold">核心團隊</h2>
                        <p className="mt-3 text-slate-600">跨領域的核心成員，從設計到後端都能落地執行。</p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "林以諾", role: "創辦人 & 執行長", img: "https://i.pravatar.cc/150?img=32" },
                                { name: "陳韻如", role: "產品設計師", img: "https://i.pravatar.cc/150?img=12" },
                                { name: "王博文", role: "嵌入式工程師", img: "https://i.pravatar.cc/150?img=48" },
                                { name: "Susan Lee", role: "資料科學家", img: "https://i.pravatar.cc/150?img=68" },
                            ].map((t) => (
                                <div key={t.name} className="p-5 bg-white rounded-2xl shadow border text-center">
                                    <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full mx-auto object-cover" />
                                    <div className="mt-4 font-semibold">{t.name}</div>
                                    <div className="text-sm text-slate-500">{t.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-3xl font-bold">聯絡我們</h2>
                            <p className="mt-3 text-slate-600">有專案、合作或媒體採訪需求，歡迎填寫以下表單或直接寄信至 <span className="font-medium">hello@synthetix.example</span></p>

                            <div className="mt-6 grid grid-cols-1 gap-4">
                                <input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white" placeholder="你的名字" />
                                <input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white" placeholder="Email" />
                                <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white" rows={5} placeholder="簡短說明你的需求"></textarea>
                                <div className="flex items-center gap-3">
                                    <button className="px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow">送出</button>
                                    <a href="mailto:hello@synthetix.example" className="text-sm text-slate-500">或直接發信</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="p-6 bg-gradient-to-br from-indigo-600 to-cyan-400 text-white rounded-2xl shadow-lg">
                                <h3 className="font-semibold">公司資訊</h3>
                                <ul className="mt-4 text-sm space-y-2">
                                    <li>地址：台北市信義區示範路 88 號</li>
                                    <li>電話：+886 2 1234 5678</li>
                                    <li>Email：hello@synthetix.example</li>
                                </ul>
                            </div>

                            <div className="mt-6 p-6 bg-white rounded-2xl shadow border">
                                <h4 className="font-semibold">快訊訂閱</h4>
                                <p className="mt-2 text-sm text-slate-600">收到產品更新與活動通知。</p>
                                <div className="mt-4 flex gap-3">
                                    <input className="flex-1 px-3 py-2 rounded-lg border border-slate-200" placeholder="Email" />
                                    <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white">訂閱</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="mt-12 bg-white border-t border-slate-100">
                    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
                        <div>© {new Date().getFullYear()} Synthetix Industries — All rights reserved.</div>
                        <div className="flex gap-4">
                            <a className="hover:text-indigo-600">Privacy</a>
                            <a className="hover:text-indigo-600">Terms</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
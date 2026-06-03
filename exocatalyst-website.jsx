'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Menu, X, Download, ArrowRight, CheckCircle2, Globe, Lock, Zap, Code2, Shield, TrendingUp, Brain, Network } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

const ExOCatalyst = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedPartner, setExpandedPartner] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [maturityScore, setMaturityScore] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const { scrollY } = useScroll();

  const headerY = useTransform(scrollY, [0, 100], [0, -50]);
  const opacityNav = useTransform(scrollY, [0, 100], [1, 0.95]);

  const partners = [
    { name: 'AWS', icon: '☁️', description: 'Cloud infrastructure and AI services partnership for scalable agent deployment.' },
    { name: 'Microsoft', icon: '🔵', description: 'Enterprise AI integration through Azure OpenAI and Teams ecosystem.' },
    { name: 'Altron', icon: '⚡', description: 'Regional technology infrastructure and enterprise solutions co-delivery.' },
    { name: 'RentWorks', icon: '🏢', description: 'Industry-specific workflow automation and property management AI.' },
  ];

  const services = [
    {
      title: 'Agentic Solution Development',
      description: 'Multi-agent systems, secure RAG pipelines, and autonomous workflow orchestration engineered for enterprise scale.',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'AI Governance & Risk Management',
      description: 'ISO 42001 adherence, NIST AI RMF frameworks, POPIA data protection, and King IV alignment audits.',
      icon: Shield,
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Digital Transformation Strategy',
      description: 'Technical debt reduction, legacy modernization, cloud architecture, and infrastructure scaling.',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Fractional CAIO & Product Management',
      description: 'Boardroom AI readiness, P&L-aligned roadmaps, maturity modeling, and executive upskilling.',
      icon: Code2,
      color: 'from-amber-500 to-orange-600',
    },
  ];

  const caseStudies = [
    {
      title: 'Multi-Agent Governance System',
      subtitle: 'Government-Aligned Academic Evaluation',
      metrics: [
        { label: 'Evaluation Efficiency', value: '+87%' },
        { label: 'Compliance Score', value: '98.5%' },
        { label: 'Processing Time', value: '-73%' },
      ],
    },
    {
      title: 'Industrial Computer Vision',
      subtitle: 'Automated Safety Helmet Enforcement (HelmNet)',
      metrics: [
        { label: 'Detection Accuracy', value: '99.2%' },
        { label: 'Safety Incidents', value: '-82%' },
        { label: 'Response Time', value: '<1s' },
      ],
    },
    {
      title: 'Predictive Infrastructure Maintenance',
      subtitle: 'Wind Turbine ML Classification Models',
      metrics: [
        { label: 'Uptime Improvement', value: '+94%' },
        { label: 'Maintenance Costs', value: '-58%' },
        { label: 'Prediction Accuracy', value: '96.8%' },
      ],
    },
    {
      title: 'Enterprise RAG Infrastructure',
      subtitle: 'Secure Localized Corporate Knowledge',
      metrics: [
        { label: 'Response Accuracy', value: '97.1%' },
        { label: 'Deployment Time', value: '12 days' },
        { label: 'Data Security', value: 'ISO 27001' },
      ],
    },
  ];

  const quizQuestions = [
    {
      question: 'What is your current AI maturity level?',
      options: ['Exploring', 'Piloting', 'Scaling', 'Optimizing'],
    },
    {
      question: 'How critical is governance/compliance to your implementation?',
      options: ['Low Priority', 'Important', 'Essential', 'Board-Level Mandate'],
    },
    {
      question: 'What is your organization size?',
      options: ['100-500 employees', '500-5K employees', '5K-50K employees', '50K+ employees'],
    },
    {
      question: 'What best describes your primary need?',
      options: ['Workflow Automation', 'Data Intelligence', 'Risk Governance', 'Strategic Transformation'],
    },
    {
      question: 'What is your target transformation timeline?',
      options: ['<3 months', '3-6 months', '6-12 months', '12+ months'],
    },
  ];

  const calculateMaturityScore = () => {
    const scoreMap = {
      0: { 'Exploring': 20, 'Piloting': 40, 'Scaling': 70, 'Optimizing': 95 },
      1: { 'Low Priority': 30, 'Important': 60, 'Essential': 80, 'Board-Level Mandate': 95 },
      2: { '100-500 employees': 35, '500-5K employees': 55, '5K-50K employees': 75, '50K+ employees': 85 },
      3: { 'Workflow Automation': 50, 'Data Intelligence': 60, 'Risk Governance': 80, 'Strategic Transformation': 90 },
      4: { '<3 months': 40, '3-6 months': 65, '6-12 months': 80, '12+ months': 70 },
    };

    let total = 0;
    Object.keys(quizAnswers).forEach((key) => {
      total += scoreMap[key][quizAnswers[key]] || 0;
    });
    return Math.round(total / Object.keys(quizAnswers).length);
  };

  const handleQuizAnswer = (answer) => {
    const newAnswers = { ...quizAnswers, [quizStep]: answer };
    setQuizAnswers(newAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setMaturityScore(calculateMaturityScore());
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
    setMaturityScore(0);
  };

  const AnimatedText = ({ children, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* GLOBAL NAVIGATION HEADER */}
      <motion.div
        style={{ y: headerY, opacity: opacityNav }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950/90 to-slate-950/50 backdrop-blur-md border-b border-cyan-500/20"
      >
        {/* Enterprise Gateway Banner */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 text-center text-xs md:text-sm font-medium">
          <span className="hidden sm:inline">🌐 </span>
          Need Regional Delivery? <span className="font-semibold">APAC Hub (Tork Consulting)</span> | <span className="font-semibold">Africa & Europe Hub (ExO Catalyst)</span>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">ExO Catalyst</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 text-sm">
              {['Solutions', 'Governance', 'Partners', 'Case Studies'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ color: '#00B4D8' }}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg hover:shadow-cyan-500/50 transition-shadow"
            >
              Schedule Audit
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cyan-400 p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur border-t border-cyan-500/20"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                {['Solutions', 'Governance', 'Partners', 'Case Studies'].map((item) => (
                  <a key={item} href="#" className="text-slate-300 py-2">
                    {item}
                  </a>
                ))}
                <button className="w-full px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold">
                  Schedule Audit
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <svg viewBox="0 0 1200 600" className="w-full h-full">
              <defs>
                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#gradient)" strokeWidth="1" />
                </pattern>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect width="1200" height="600" fill="url(#grid)" />
            </svg>
          </div>

          {/* Glowing Orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <AnimatedText>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Exponential Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Transformation
              </span>
              <br />
              <span className="text-white">Governed Enterprise AI</span>
            </h1>
          </AnimatedText>

          <AnimatedText className="mb-8 delay-200">
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We bridge advanced technical AI architecture with board-level risk mitigation to transform global enterprises.
            </p>
          </AnimatedText>

          {/* Trust Badge */}
          <AnimatedText className="mb-12">
            <div className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/50 rounded-xl p-6 backdrop-blur-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="text-cyan-400" size={20} />
                  <span className="font-semibold text-cyan-300">Enterprise Security</span>
                </div>
                <p className="text-slate-300 text-sm">
                  All ExO Catalyst implementations are <span className="text-cyan-300 font-semibold">cryptographically secured</span> and governed by the <span className="text-cyan-300 font-semibold">TORK.Network Enterprise Middleware Layer</span>.
                </p>
              </motion.div>
            </div>
          </AnimatedText>

          {/* Dual-Track Routing Buttons */}
          <AnimatedText>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.button
                whileHover={{ scale: 1.05, shadow: '0 0 30px rgba(0, 180, 216, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTrack('enterprise')}
                className="group p-8 rounded-xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/50 hover:border-cyan-400 transition-all"
              >
                <div className="text-2xl font-bold text-white mb-2">Enterprise & Boardroom</div>
                <div className="text-sm text-slate-400 mb-4">
                  Custom Agent Engineering · ISO 42001 Audits · King IV Risk Governance
                </div>
                <div className="flex items-center justify-center gap-2 text-cyan-400 group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight size={16} />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTrack('growth')}
                className="group p-8 rounded-xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-blue-500/50 hover:border-blue-400 transition-all"
              >
                <div className="text-2xl font-bold text-white mb-2">Corporate Growth</div>
                <div className="text-sm text-slate-400 mb-4">
                  Digital Transformation · Workflow Automation · Product Management
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-400 group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight size={16} />
                </div>
              </motion.button>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-20 px-4 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedText className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Co-Innovation Ecosystem</h2>
            <p className="text-slate-400">Strategic partnerships powering enterprise-grade AI delivery</p>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, idx) => (
              <AnimatedText key={idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setExpandedPartner(idx)}
                  onHoverEnd={() => setExpandedPartner(null)}
                  className="group relative p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden"
                >
                  <div className="text-5xl mb-4">{partner.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  
                  <AnimatePresence>
                    {expandedPartner === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-slate-400 mt-4 pt-4 border-t border-slate-700"
                      >
                        {partner.description}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                </motion.div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SERVICE PILLARS */}
      <section className="py-20 px-4 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Service Pillars</h2>
            <p className="text-slate-400 text-lg">Enterprise-grade engagement models built for exponential impact</p>
          </AnimatedText>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <AnimatedText key={idx}>
                  <motion.div
                    whileHover={{ y: -12 }}
                    className="group relative p-8 rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-700 hover:border-cyan-500/30 transition-all overflow-hidden"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4`}>
                      <Icon className="text-white" size={24} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{service.description}</p>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 w-0 group-hover:w-full transition-all duration-500" />
                  </motion.div>
                </AnimatedText>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLIANCE & LEAD MAGNETS */}
      <section className="py-20 px-4 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          {/* Compliance Matrix */}
          <AnimatedText className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Governance & Compliance by Design</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'POPIA Compliance', description: 'Protection of Personal Information Act', icon: '🔐' },
                { label: 'King IV Governance', description: 'Corporate governance alignment & audits', icon: '👑' },
                { label: 'ISO 42001 Certification', description: 'AI Management Systems Framework', icon: '✓' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-white mb-2">{item.label}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedText>

          {/* Executive Chapter Gateway & Quiz */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Lead Magnet */}
            <AnimatedText>
              <div className="p-10 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-cyan-500/30 backdrop-blur-md h-full flex flex-col justify-between">
                <div>
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="text-2xl font-bold text-white mb-3">The Agent Crisis</h3>
                  <p className="text-cyan-300 font-semibold mb-2">Digital Edition</p>
                  <p className="text-slate-400 text-sm mb-6">
                    Premium executive guide on navigating the AI governance revolution. Board-ready insights and risk frameworks.
                  </p>
                </div>

                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="your.email@enterprise.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                  />

                  <select className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-300 focus:border-cyan-500 focus:outline-none transition-colors">
                    <option>Select Organization Size</option>
                    <option>100-500 employees</option>
                    <option>500-5K employees</option>
                    <option>5K-50K employees</option>
                    <option>50K+ employees</option>
                  </select>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    <Download size={18} /> Download Now
                  </motion.button>
                </div>
              </div>
            </AnimatedText>

            {/* Digital Maturity Quiz */}
            <AnimatedText>
              <div className="p-10 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-blue-500/30 backdrop-blur-md h-full">
                <h3 className="text-2xl font-bold text-white mb-2">AI Readiness Assessment</h3>
                <p className="text-slate-400 text-sm mb-8">5-minute diagnostic to measure your AI maturity</p>

                {maturityScore === 0 ? (
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-slate-400 mb-2">Question {quizStep + 1} of {quizQuestions.length}</div>
                      <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden mb-4">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                        />
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-white">
                      {quizQuestions[quizStep].question}
                    </h4>

                    <div className="space-y-3">
                      {quizQuestions[quizStep].options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuizAnswer(option)}
                          className="w-full p-4 rounded-lg bg-slate-900/50 border border-slate-700 text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all text-left"
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                      {maturityScore}%
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Your AI Readiness Score</h4>
                    <p className="text-slate-400 mb-8">
                      {maturityScore >= 80 ? 'Ready for enterprise AI transformation' :
                       maturityScore >= 60 ? 'Good foundation; strategic optimization needed' :
                       'Significant opportunity for AI-driven growth'}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold mb-4"
                    >
                      Download Custom Blueprint
                    </motion.button>

                    <button
                      onClick={resetQuiz}
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Take Assessment Again
                    </button>
                  </div>
                )}
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 px-4 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise Success Stories</h2>
            <p className="text-slate-400">Anonymized case studies showcasing measurable impact</p>
          </AnimatedText>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <AnimatedText key={idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/60 border border-slate-700 hover:border-cyan-500/30 transition-all overflow-hidden group"
                >
                  <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                  <p className="text-sm text-cyan-400 mb-6">{study.subtitle}</p>

                  <div className="space-y-4">
                    {study.metrics.map((metric, midx) => (
                      <motion.div
                        key={midx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: midx * 0.1 }}
                        className="flex items-end justify-between"
                      >
                        <span className="text-slate-400 text-sm">{metric.label}</span>
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: midx * 0.1 + 0.2 }}
                          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                        >
                          {metric.value}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                </motion.div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a confidential strategy session with our enterprise AI architects.
            </p>
          </AnimatedText>

          <AnimatedText>
            <motion.button
              whileHover={{ scale: 1.08, shadow: '0 0 40px rgba(0, 180, 216, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-3"
            >
              Schedule Audit <ArrowRight size={20} />
            </motion.button>
          </AnimatedText>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/20 bg-slate-950/50 backdrop-blur-md py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-white mb-4">ExO Catalyst</h3>
              <p className="text-slate-400 text-sm">
                Enterprise AI governance and digital transformation for global organizations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Agentic Development</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">AI Governance</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Digital Strategy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Fractional CAIO</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Compliance</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">POPIA Alignment</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">King IV Framework</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">ISO 42001</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">GDPR Ready</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Global Hubs</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://torkconsulting.ai" className="hover:text-cyan-400 transition">Tork Consulting (APAC)</a></li>
                <li><a href="https://tork.network" className="hover:text-cyan-400 transition">TORK.Network</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 ExO Catalyst. All rights reserved. | <span className="text-cyan-400">POPIA</span> & <span className="text-cyan-400">GDPR</span> Compliant
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExOCatalyst;

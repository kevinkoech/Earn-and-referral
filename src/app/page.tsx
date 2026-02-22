export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full mb-6">
              Earn While You Share
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Turn Your Network Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Passive Income
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
              Join thousands of earners who make money by completing tasks and sharing 
              referral links. No skills required, start earning today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/25">
                Start Earning Now
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">
                Learn More
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-neutral-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Free to Join</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Instant Payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No Minimum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">$2.5M+</div>
              <div className="text-neutral-400">Paid Out</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">150K+</div>
              <div className="text-neutral-400">Active Earners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500K+</div>
              <div className="text-neutral-400">Tasks Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-neutral-400">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Multiple Ways to Earn
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Choose from various earning methods that fit your lifestyle. 
              Earn on your own time, at your own pace.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-neutral-800/50 rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-colors">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Referral Program</h3>
              <p className="text-neutral-400 mb-4">
                Share your unique referral link and earn commission on every successful signup. 
                Up to 3 levels of referrals.
              </p>
              <div className="text-emerald-400 font-semibold">Up to $5 per referral</div>
            </div>

            {/* Feature 2 */}
            <div className="bg-neutral-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-colors">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Complete Tasks</h3>
              <p className="text-neutral-400 mb-4">
                Simple tasks like surveys, app downloads, and signups. New tasks added daily 
                with instant credit.
              </p>
              <div className="text-cyan-400 font-semibold">$0.50 - $25 per task</div>
            </div>

            {/* Feature 3 */}
            <div className="bg-neutral-800/50 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Watch & Earn</h3>
              <p className="text-neutral-400 mb-4">
                Get paid to watch videos and ads. Perfect for passive earning while 
                doing other activities.
              </p>
              <div className="text-purple-400 font-semibold">$0.10 - $2 per video</div>
            </div>

            {/* Feature 4 */}
            <div className="bg-neutral-800/50 rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-colors">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cashback Offers</h3>
              <p className="text-neutral-400 mb-4">
                Shop through our partners and earn cashback on purchases. Stack with 
                other rewards for maximum savings.
              </p>
              <div className="text-orange-400 font-semibold">Up to 30% cashback</div>
            </div>

            {/* Feature 5 */}
            <div className="bg-neutral-800/50 rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-colors">
              <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.95-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Daily Bonuses</h3>
              <p className="text-neutral-400 mb-4">
                Login daily to claim your bonus. Streak rewards increase your earnings 
                the more consecutive days you visit.
              </p>
              <div className="text-pink-400 font-semibold">Up to $1 daily bonus</div>
            </div>

            {/* Feature 6 */}
            <div className="bg-neutral-800/50 rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-colors">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Level Up System</h3>
              <p className="text-neutral-400 mb-4">
                Earn XP and unlock higher earning rates, exclusive tasks, and premium 
                rewards as you progress.
              </p>
              <div className="text-yellow-400 font-semibold">Up to 2x earning multiplier</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-neutral-800/30" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Earning in 3 Simple Steps
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              No complicated setup. No hidden fees. Just sign up and start earning immediately.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="pt-16 text-center">
                <div className="bg-neutral-800 rounded-2xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Create Account</h3>
                  <p className="text-neutral-400">
                    Sign up for free in under 30 seconds. No credit card or personal documents required.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="pt-16 text-center">
                <div className="bg-neutral-800 rounded-2xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Choose Tasks</h3>
                  <p className="text-neutral-400">
                    Browse available tasks and pick ones that interest you. New opportunities added daily.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="pt-16 text-center">
                <div className="bg-neutral-800 rounded-2xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Get Paid</h3>
                  <p className="text-neutral-400">
                    Withdraw your earnings instantly via PayPal, bank transfer, or crypto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Program Highlight */}
      <section className="py-24" id="referral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl p-8 lg:p-16 border border-emerald-500/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-emerald-500/30 text-emerald-400 text-sm font-medium rounded-full mb-6">
                  Referral Program
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Earn More with Our 3-Level Referral System
                </h2>
                <p className="text-neutral-300 text-lg mb-8">
                  The more friends you invite, the more you earn. Our multi-level referral system 
                  lets you earn from your referrals&apos; referrals too!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                      L1
                    </div>
                    <div>
                      <div className="text-white font-semibold">Direct Referrals</div>
                      <div className="text-neutral-400">Earn 10% of their earnings</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                      L2
                    </div>
                    <div>
                      <div className="text-white font-semibold">2nd Level</div>
                      <div className="text-neutral-400">Earn 5% of their earnings</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      L3
                    </div>
                    <div>
                      <div className="text-white font-semibold">3rd Level</div>
                      <div className="text-neutral-400">Earn 2% of their earnings</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900/50 rounded-2xl p-8 border border-white/10">
                <div className="text-center mb-6">
                  <div className="text-neutral-400 mb-2">Your potential monthly earnings</div>
                  <div className="text-5xl font-bold text-white">$1,250</div>
                  <div className="text-emerald-400">with just 50 referrals</div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between text-neutral-400">
                    <span>Direct referrals (50)</span>
                    <span className="text-white">$500/mo</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>2nd level (250)</span>
                    <span className="text-white">$500/mo</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>3rd level (1,250)</span>
                    <span className="text-white">$250/mo</span>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-emerald-400 font-bold">$1,250/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-800/30" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Earners Say
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied members who are already earning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-neutral-800 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-300 mb-6">
                &ldquo;I was skeptical at first, but I&apos;ve already earned over $500 in my first month. 
                The referral program is amazing - my network is basically paying my bills now!&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah K.</div>
                  <div className="text-neutral-400 text-sm">Earned $500+ in 1 month</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-neutral-800 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-300 mb-6">
                &ldquo;Perfect for students like me. I complete surveys between classes and earn enough 
                for my monthly subscriptions. The instant payout feature is a game changer.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div>
                  <div className="text-white font-semibold">Mike J.</div>
                  <div className="text-neutral-400 text-sm">College Student</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-neutral-800 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-300 mb-6">
                &ldquo;I&apos;ve tried many earning platforms, but this one has the best referral system by far. 
                My 3rd level referrals alone bring me $200+ monthly. Highly recommend!&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                  AL
                </div>
                <div>
                  <div className="text-white font-semibold">Amanda L.</div>
                  <div className="text-neutral-400 text-sm">Top Referrer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
            Join 150,000+ earners who are already making money. Sign up takes less than 30 seconds 
            and you can start earning immediately.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-lg rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/25">
            Create Free Account
          </button>
          <p className="mt-6 text-neutral-500 text-sm">
            No credit card required · Free forever · Instant activation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">EarnHub</div>
              <p className="text-neutral-400 text-sm">
                The easiest way to earn money online through tasks and referrals.
              </p>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Earning</div>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Tasks</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Referral Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cashback</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Daily Bonus</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Company</div>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Legal</div>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm">
              © 2024 EarnHub. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.25 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

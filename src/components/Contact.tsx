"use client";

import { Mail, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="mb-24">
      <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Contact Me</h2>
      <div className="h-1 w-20 bg-accent mb-12 rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-card border border-card-border rounded-3xl p-8 lg:p-12 shadow-lg">
        
        {/* Left Side: Socials */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-muted leading-relaxed mb-8 max-w-sm">
              I'm always looking to connect with others in cloud infrastructure and software engineering. Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <a href="tel:+60149948979" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-full bg-black/50 border border-card-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium">+60 14-994 8979</span>
            </a>
            
            <a href="mailto:aidandanielwe@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-full bg-black/50 border border-card-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">aidandanielwe@gmail.com</span>
            </a>
            
            <a href="https://www.linkedin.com/in/aidan-andrew-daniel-b77764255/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-full bg-black/50 border border-card-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <span className="font-medium">Aidan Andrew Daniel</span>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-black/20 p-8 rounded-2xl border border-white/5 relative">
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
            
            {/* NOTE TO USER: Replace this string with your Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="REPLACE_WITH_YOUR_KEY" />
            
            {/* Optional: Add a redirect URL for after submission */}
            {/* <input type="hidden" name="redirect" value="https://yourwebsite.com/thanks" /> */}

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-white/80 uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="your secret identity" 
                className="bg-black/50 border border-card-border rounded-xl px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-white/80 uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="i wont spam u" 
                className="bg-black/50 border border-card-border rounded-xl px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-white/80 uppercase tracking-wider">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={4}
                placeholder="write ur message here" 
                className="bg-black/50 border border-card-border rounded-xl px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
              />
            </div>

            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <button 
              type="submit" 
              className="mt-2 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-accent text-white font-bold hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(255,0,51,0.4)] transition-all"
            >
              Send Message
              <Send className="w-4 h-4 ml-1" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

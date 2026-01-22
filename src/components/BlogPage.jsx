import { useState, useEffect, useMemo } from "react";
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  Clock, 
  TrendingUp, 
  Mail,
  ChevronRight,
  X,
  Share2,
  Check,
  Facebook,
  Twitter,
  Linkedin,
  Loader2,
  BookOpen
} from "lucide-react";

// ASSET IMPORTS 
import blogBg from "../assets/c1.jpg"; 
import bridalImg from "../assets/bridal1.jpg"; 
import skinImg from "../assets/p1.jpg"; 
import careerImg from "../assets/vision.jpg";
import hairImg from "../assets/p2.jpg";
import makeupKitImg from "../assets/p4.jpg"; 

// MOCK DATA: BLOG POSTS 
const allPosts = [
  {
    id: 1,
    title: "5 Bridal Makeup Trends Dominating 2026",
    excerpt: "From minimal 'clean girl' aesthetics to the return of bold red lips, here is everything you need to know about this wedding season's makeup trends.",
    content: "The bridal makeup landscape is shifting rapidly. Gone are the days of heavy, cakey foundations. 2026 is all about skin that looks like skin. We are seeing a surge in demand for 'Cloud Skin' - a soft matte finish that glows from within. Additionally, the 'Latte Makeup' trend has evolved into bridal looks, using warm browns and caramels to sculpt the face naturally. Another huge trend is the return of the classic red lip, but paired with barely-there eye makeup for a modern chic look...",
    category: "Makeup",
    author: "Jouee Patwardhan",
    date: "2025-10-24",
    displayDate: "Oct 24, 2025",
    readTime: "5 min read",
    image: bridalImg,
    featured: true,
    views: 1250
  },
  {
    id: 2,
    title: "The Ultimate Guide to Korean Glass Skin",
    excerpt: "Achieving that flawless, dewy look isn't just about products; it's about the technique. Learn the 7-step routine straight from our skin experts.",
    content: "Korean Glass Skin is not a myth; it is a discipline. The secret lies in hydration layers. Start with a double cleanse (oil-based followed by water-based). Then, use a toner not once, but up to 7 times (the 7-skin method) to plump up the skin cells. Key ingredients to look for include Hyaluronic Acid, Snail Mucin, and Centella Asiatica. But products aside, the application technique—gentle tapping instead of rubbing—increases blood circulation and absorption...",
    category: "Skin Care",
    author: "Dr. Sarah Khan",
    date: "2025-10-18",
    displayDate: "Oct 18, 2025",
    readTime: "4 min read",
    image: skinImg,
    featured: false,
    views: 980
  },
  {
    id: 3,
    title: "Why Cosmetology is a Recession-Proof Career",
    excerpt: "Explore the growing demand for beauty professionals globally and why investing in a beauty degree is a safe bet for your future.",
    content: "History has shown that the 'Lipstick Effect' holds true—consumers still buy affordable luxury beauty goods even during economic downturns. But beyond products, the service industry remains robust. People will always need haircuts, skincare treatments, and grooming. With the rise of social media, the pressure to look good has created a permanent demand for skilled makeup artists and aestheticians. A degree in cosmetology offers flexibility—you can work in a salon, start your own business, or freelance...",
    category: "Career",
    author: "Admissions Team",
    date: "2025-10-10",
    displayDate: "Oct 10, 2025",
    readTime: "6 min read",
    image: careerImg,
    featured: false,
    views: 1500
  },
  {
    id: 4,
    title: "Hair Botox vs. Keratin: What’s the Difference?",
    excerpt: "Confused between these two popular treatments? We break down the pros, cons, and which one is right for your hair type.",
    content: "While both treatments aim to smooth hair, they work differently. Keratin treatments use chemicals (often formaldehyde-releasers) to smooth out the hair cuticle and reduce volume, making it ideal for thick, curly, frizzy hair. Hair Botox, on the other hand, is a deep conditioning treatment free of harsh chemicals. It doesn't straighten hair but fills in damaged sections, making hair look fuller and smoother. Choose Botox if your hair is fine or damaged; choose Keratin if you want straighter hair...",
    category: "Hair",
    author: "Rahul Verma",
    date: "2025-09-28",
    displayDate: "Sep 28, 2025",
    readTime: "3 min read",
    image: hairImg,
    featured: false,
    views: 850
  },
  {
    id: 5,
    title: "Nail Art Designs You Can Do at Home",
    excerpt: "You don't always need a salon visit for cute nails. Here are 5 beginner-friendly designs using tools you already have.",
    content: "1. The Dot: Use a bobby pin dipped in polish to create flowers or polka dots. 2. The Scotch Tape French: Use tape to block off your nail tip for a crisp line. 3. The Gradient: Apply two colors to a makeup sponge and dab onto the nail. 4. Foil Accents: Use cooking foil scrunched up to dab metallic polish for a textured look. 5. Negative Space: Use sticker reinforcements to leave parts of your nail unpainted for a geometric look...",
    category: "Nails",
    author: "Lisa Ray",
    date: "2025-09-15",
    displayDate: "Sep 15, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    featured: false,
    views: 620
  },
  {
    id: 6,
    title: "The Science Behind Chemical Peels",
    excerpt: "Understanding how AHAs and BHAs work on your skin layers to reveal a brighter, younger complexion.",
    content: "Chemical peels are controlled exfoliation. AHAs (Alpha Hydroxy Acids) like Glycolic Acid work on the surface, dissolving the glue that holds dead skin cells together. They are great for sun damage and dullness. BHAs (Beta Hydroxy Acids) like Salicylic Acid are oil-soluble, meaning they penetrate deep into the pores to clear out sebum, making them perfect for acne-prone skin. It's crucial to start with low concentrations and always use SPF afterwards...",
    category: "Skin Care",
    author: "Dr. Sarah Khan",
    date: "2025-09-05",
    displayDate: "Sep 05, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    featured: false,
    views: 1100
  },
  {
    id: 7,
    title: "Building Your Makeup Kit on a Budget",
    excerpt: "Top drugstore dupes that perform just as well as high-end luxury brands. Save money without compromising on quality.",
    content: "You don't need to spend thousands to have a pro kit. Many drugstore foundations now use the same labs as luxury brands. For mascara, drugstore brands have always led the game. Focus your budget on skin prep (good moisturizer) and tools (good brushes), as these make the biggest difference. We list our top 10 dupes for 2025...",
    category: "Makeup",
    author: "Jouee Patwardhan",
    date: "2025-08-20",
    displayDate: "Aug 20, 2025",
    readTime: "4 min read",
    image: makeupKitImg, 
    featured: false,
    views: 540
  },
  {
    id: 8,
    title: "Men's Grooming: The Next Big Thing",
    excerpt: "The male beauty industry is booming. From beard care to basic skincare, here is how you can tap into this market.",
    content: "Men are becoming increasingly conscious of their appearance. The market for beard oils, tinted moisturizers for men, and brow grooming is exploding. As a cosmetologist, specializing in men's grooming can open a lucrative niche. We discuss the essential skills needed for male aesthetics...",
    category: "Career",
    author: "Admissions Team",
    date: "2025-08-15",
    displayDate: "Aug 15, 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&q=80&w=800",
    featured: false,
    views: 890
  }
];

//COMPONENTS 

const QuickReadModal = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full md:max-w-3xl h-[90vh] md:h-auto md:max-h-[85vh] md:rounded-3xl rounded-t-3xl overflow-hidden shadow-2xl flex flex-col relative animate-in slide-in-from-bottom-10 md:slide-in-from-bottom-0 md:zoom-in-95">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-black/50 hover:text-white backdrop-blur-md p-2 rounded-full transition-all"
        >
          <X size={24} />
        </button>

        {/* Header Image */}
        <div className="h-64 md:h-80 shrink-0 relative">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
            <span className="bg-[#631529] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              {post.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold leading-tight">{post.title}</h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-10 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <User size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{post.author}</p>
                <p className="text-xs text-gray-500">{post.displayDate} • {post.readTime}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition"><Facebook size={18} /></button>
              <button className="p-2 rounded-full border border-gray-200 hover:bg-sky-50 hover:text-sky-500 transition"><Twitter size={18} /></button>
              <button className="p-2 rounded-full border border-gray-200 hover:bg-blue-50 hover:text-blue-700 transition"><Linkedin size={18} /></button>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="font-serif text-xl text-gray-800 mb-6 italic border-l-4 border-[#631529] pl-4">
              "{post.excerpt}"
            </p>
            {post.content.split('. ').map((sentence, i) => (
              <p key={i} className="mb-4">{sentence}.</p>
            ))}
            <p className="mt-8 font-bold text-gray-900">
              Want to learn more about {post.category}? Check out our certified courses today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [visibleCount, setVisibleCount] = useState(6);
  const [newsletterStatus, setNewsletterStatus] = useState("idle"); 
  const [selectedPost, setSelectedPost] = useState(null); 
  const [copiedId, setCopiedId] = useState(null); 

  const categories = ["All", "Makeup", "Skin Care", "Hair", "Nails", "Career"];

  const processedPosts = useMemo(() => {
    let posts = allPosts.filter(post => {
      const matchCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    if (sortBy === "Newest") {
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "Oldest") {
      posts.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "Popular") {
      posts.sort((a, b) => b.views - a.views);
    }

    return posts;
  }, [selectedCategory, searchQuery, sortBy]);

  const featuredPost = allPosts.find(p => p.featured) || allPosts[0];
  const visiblePosts = processedPosts.slice(0, visibleCount);
  const hasMore = visibleCount < processedPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleShare = (e, id) => {
    e.stopPropagation(); 
    navigator.clipboard.writeText(window.location.href); 
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterStatus("loading");
    setTimeout(() => setNewsletterStatus("success"), 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <QuickReadModal 
        isOpen={!!selectedPost} 
        post={selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />

      <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 bg-[#2a0a12] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={blogBg} alt="Blog Background" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#631529] border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-wider px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-6 animate-pulse">
            THE BEAUTY EDIT
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Trends, Tips & <br />
            <span className="text-pink-400">Industry Insights</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
            Stay ahead of the curve with expert advice from our master trainers and industry professionals.
          </p>

          <div className="max-w-xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Search articles (e.g., 'Bridal Makeup')" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 rounded-full pl-6 pr-14 py-3 md:py-4 focus:outline-none focus:bg-white/20 focus:border-white transition-all shadow-lg text-sm md:text-base group-hover:bg-white/15"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80">
              <Search size={20} />
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 py-3 md:py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wide mr-2 hidden md:block">
              Topics:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300
                  ${selectedCategory === cat 
                    ? "bg-[#631529] text-white shadow-md transform scale-105" 
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs text-gray-500 font-bold uppercase hidden md:block">Sort By:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#631529] focus:border-[#631529] block p-2.5 cursor-pointer"
            >
              <option value="Newest">Newest First</option>
              <option value="Oldest">Oldest First</option>
              <option value="Popular">Most Popular</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#faf7f7] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {selectedCategory === "All" && !searchQuery && (
            <div className="mb-12 md:mb-16 animate-in slide-in-from-bottom-5 duration-700">
              <div 
                onClick={() => setSelectedPost(featuredPost)}
                className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group grid lg:grid-cols-2 cursor-pointer border border-gray-100"
              >
                <div className="h-64 lg:h-auto overflow-hidden relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-[#631529] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp size={12} /> Featured
                  </div>
                </div>
                
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs font-bold text-[#631529] uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-1"><Tag size={12} /> {featuredPost.category}</span>
                    <span className="flex items-center gap-1 text-gray-400 normal-case font-normal"><Calendar size={12} /> {featuredPost.displayDate}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 text-gray-900 group-hover:text-[#631529] transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <User size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">{featuredPost.author}</p>
                        <p className="text-[10px] text-gray-500">{featuredPost.readTime}</p>
                      </div>
                    </div>
                    
                    <span className="flex items-center gap-2 text-sm font-bold text-[#631529] group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
              {searchQuery ? `Search Results` : "Latest Articles"}
              {searchQuery && <span className="text-gray-400 text-lg font-normal">for "{searchQuery}"</span>}
            </h3>
            <span className="text-xs font-bold text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100">
              Showing {visiblePosts.length} of {processedPosts.length}
            </span>
          </div>

          {visiblePosts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
              <Search size={40} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-600">No articles found</h3>
              <p className="text-gray-400 text-sm">Try searching for something else.</p>
              <button 
                onClick={() => {setSearchQuery(""); setSelectedCategory("All");}} 
                className="mt-4 text-[#631529] font-bold underline text-sm"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visiblePosts.map((post) => (
                <article 
                  key={post.id} 
                  onClick={() => setSelectedPost(post)}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer border border-gray-100 relative"
                >
                  <button 
                    onClick={(e) => handleShare(e, post.id)}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#631529] transition-colors"
                    title="Copy Link"
                  >
                    {copiedId === post.id ? <Check size={14} /> : <Share2 size={14} />}
                  </button>

                  <div className="h-52 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-[#631529] uppercase tracking-wide flex items-center gap-1 shadow-sm">
                      <Tag size={10} /> {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {post.displayDate}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>

                    <h2 className="text-lg md:text-xl font-serif font-bold mb-3 text-gray-900 group-hover:text-[#631529] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                          <User size={12} />
                        </div>
                        <span className="text-xs font-bold text-gray-700">{post.author}</span>
                      </div>
                      <span className="text-[#631529] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Quick Read <BookOpen size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {hasMore && (
            <div className="mt-12 md:mt-16 text-center">
              <button 
                onClick={handleLoadMore}
                className="bg-white border border-gray-200 text-gray-600 px-8 py-3 rounded-full font-bold hover:bg-[#631529] hover:text-white hover:border-[#631529] transition shadow-sm text-sm md:text-base flex items-center gap-2 mx-auto"
              >
                Load More Articles <ChevronRight size={16} />
              </button>
            </div>
          )}

        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-[#631529] rounded-[32px] md:rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} />
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-white/80 text-sm md:text-lg mb-8 max-w-lg mx-auto">
                Get the latest beauty trends, career tips, and exclusive course offers delivered straight to your inbox.
              </p>
              {newsletterStatus === "success" ? (
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 inline-flex items-center gap-3 animate-in fade-in zoom-in">
                  <div className="bg-green-500 rounded-full p-1"><Check size={16} /></div>
                  <span className="font-bold">Subscribed Successfully! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input type="email" required placeholder="Enter your email address" className="flex-1 px-6 py-3.5 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm md:text-base border-none" />
                  <button disabled={newsletterStatus === "loading"} className="bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-gray-900 transition shadow-lg text-sm md:text-base flex items-center justify-center gap-2">
                    {newsletterStatus === "loading" ? <Loader2 className="animate-spin" size={18} /> : "Subscribe"}
                  </button>
                </form>
              )}
              <p className="text-[10px] text-white/50 mt-4">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
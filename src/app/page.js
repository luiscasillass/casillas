import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronRight, ShoppingBag, MapPin, Award, Heart } from 'lucide-react';

// --- CONFIGURACIÓN DE ESTILOS Y DATOS ---

const colors = {
  brandBlue: '#3e5373',
  cream: '#F9F7F2',
  textMain: '#1A1A1A',
  textLight: '#6B7280',
  white: '#FFFFFF'
};

const products = [
  { id: 1, name: 'Mozzarella Artesanal', desc: 'Hilado a mano, textura elástica perfecta.', img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Chihuahua Supremo', desc: 'El rey del fundido. Sabor mantequilloso profundo.', img: 'https://images.unsplash.com/photo-1624806992066-5d5462433aa6?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Adobera de Los Altos', desc: 'La tradición de Jalisco en su máxima expresión.', img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Crema de Rancho', desc: 'Espesura natural, sin estabilizantes artificiales.', img: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Mantequilla Pura', desc: 'Batida lentamente. Color oro natural.', img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=800&auto=format&fit=crop' }
];

// --- COMPONENTES UI ---

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12 text-center">
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
      style={{ color: colors.brandBlue }}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-serif text-gray-900"
    >
      {children}
    </motion.h2>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm' : 'py-8 bg-white'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO AREA - Negro sobre Blanco */}
        <div className="font-serif text-2xl font-bold tracking-tighter text-black z-50">
          LÁCTEOS CASILLAS
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-gray-800">
          {['Nuestra Historia', 'Filosofía', 'Colección', 'Nuestro México'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#3e5373] transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3e5373] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="hidden md:flex items-center space-x-2 text-xs font-bold uppercase tracking-widest border border-gray-300 px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
          <span>Adquirir</span>
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-2xl font-serif z-40"
        >
          {['Nuestra Historia', 'Filosofía', 'Colección', 'Nuestro México'].map((item) => (
            <a key={item} href="#" onClick={() => setMobileMenuOpen(false)}>{item}</a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F9F7F2]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1634629377406-c8f352353df0?q=80&w=2000&auto=format&fit=crop" 
          alt="Paisaje Tepatitlán" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#F9F7F2]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-bold text-white drop-shadow-md"
        >
          Desde Tepatitlán, Jalisco
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-lg"
        >
          El Arte del <br/><span className="italic">Queso Auténtico</span>
        </motion.h1>
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2 }}
        >
          <a href="#colección" className="inline-block bg-white text-[#3e5373] px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl">
            DESCUBRIR LA COLECCIÓN
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const HistoryPhilosophy = () => {
  return (
    <section id="nuestra-historia" className="py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1000&auto=format&fit=crop" 
            alt="Vacas felices" 
            className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        <div>
          <SectionHeading subtitle="Nuestra Esencia">
            Más que lácteos,<br/> un legado.
          </SectionHeading>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
            En los verdes campos de Tepatitlán, entendemos que la excelencia no se apresura. 
            Como un buen sastre selecciona su tela, nosotros cuidamos cada detalle: desde la 
            salud de nuestras vacas hasta el último paso del proceso artesanal.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
            No fabricamos queso para las masas; lo creamos para aquellos que entienden la diferencia 
            entre alimentarse y degustar. Somos pureza, somos tradición, somos <strong>Lácteos Casillas</strong>.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="border-l-2 border-[#3e5373] pl-4">
              <h4 className="font-serif text-xl mb-2">100% Natural</h4>
              <p className="text-sm text-gray-500">Sin aditivos, solo la leche más pura de los Altos.</p>
            </div>
            <div className="border-l-2 border-[#3e5373] pl-4">
              <h4 className="font-serif text-xl mb-2">Bienestar Animal</h4>
              <p className="text-sm text-gray-500">Vacas libres y felices producen la mejor leche.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-md mb-6 aspect-[4/5]">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform">
            Ver Detalle
          </span>
        </div>
      </div>
      <h3 className="text-2xl font-serif text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-500 font-light text-sm mb-4">{product.desc}</p>
      <span className="text-[#3e5373] text-sm font-bold uppercase tracking-wider flex items-center gap-2">
        Añadir <ChevronRight size={14} />
      </span>
    </motion.div>
  );
};

const Products = () => {
  return (
    <section id="colección" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Nuestra Colección">
          Obras Maestras <br/> de los Altos de Jalisco
        </SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16 mt-16">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const OurMexico = () => {
  return (
    <section id="nuestro-méxico" className="py-24 bg-[#3e5373] text-white relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <span className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Origen y Orgullo
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8">
            El Corazón de Tepatitlán
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 font-light">
            Nuestra identidad está forjada en la tierra roja de Jalisco. No solo hacemos queso; 
            embotellamos la cultura de los charros, la elegancia de las haciendas y el trabajo 
            duro de nuestra gente. Lácteos Casillas es un tributo a México.
          </p>
          <button className="bg-white text-[#3e5373] px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
            CONOCE NUESTRO RANCHO
          </button>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1588668214407-6ea9e6d8c278?q=80&w=600&auto=format&fit=crop" className="rounded-lg translate-y-8" alt="Agave" />
          <img src="https://images.unsplash.com/photo-1549247656-74591b6e4e5b?q=80&w=600&auto=format&fit=crop" className="rounded-lg" alt="Arquitectura Jalisco" />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-serif text-2xl mb-6">LÁCTEOS CASILLAS</h2>
          <p className="text-gray-400 max-w-sm font-light">
            Redefiniendo el estándar del queso mexicano. Calidad, tradición y elegancia en cada bocado.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Menú</h4>
          <ul className="space-y-4 text-gray-300 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Productos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Historia</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Contacto</h4>
          <ul className="space-y-4 text-gray-300 font-light">
            <li className="flex items-center gap-2"><MapPin size={16}/> Tepatitlán de Morelos, Jal.</li>
            <li className="flex items-center gap-2"><Award size={16}/> Calidad Premium</li>
            <li className="flex items-center gap-2"><Heart size={16}/> Hecho en México</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-600 uppercase tracking-widest">
        &copy; 2025 Lácteos Casillas. Lujo Artesanal.
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#F9F7F2] min-h-screen font-sans selection:bg-[#3e5373] selection:text-white">
      <Navbar />
      <Hero />
      <HistoryPhilosophy />
      <Products />
      <OurMexico />
      <Footer />
    </div>
  );
}
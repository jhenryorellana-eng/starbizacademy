import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Instagram, Facebook, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.nombre.trim()) {
      setErrorMessage('Por favor ingresa tu nombre');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Por favor ingresa un email válido');
      return false;
    }
    if (!formData.asunto) {
      setErrorMessage('Por favor selecciona un asunto');
      return false;
    }
    if (!formData.mensaje.trim()) {
      setErrorMessage('Por favor escribe tu mensaje');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    // Formatear mensaje para WhatsApp
    const mensaje = `*Nuevo contacto de Starbiz Academy*

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Asunto:* ${formData.asunto}

*Mensaje:*
${formData.mensaje}`;

    // Número de WhatsApp sin espacios ni caracteres especiales
    const telefono = '18019413479';
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
    setStatus('success');
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contacto" className="py-32 bg-black relative border-t border-white/10 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-brand-cyan/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Terminal Form */}
          <div className="bg-[#0A0A15] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-orange" />
            
            <h2 className="text-4xl font-bold text-white mb-2 font-display tracking-wider">{t.contact.form_title}</h2>
            <p className="text-gray-500 mb-8 font-mono text-sm">{t.contact.form_subtitle}</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Success Message */}
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400">
                  <CheckCircle size={20} />
                  <span>Mensaje enviado exitosamente. Nos pondremos en contacto pronto.</span>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && errorMessage && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400">
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                   <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider group-focus-within:text-white transition-colors">{t.contact.labels.name}</label>
                   <input
                     type="text"
                     name="nombre"
                     value={formData.nombre}
                     onChange={handleChange}
                     className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all font-mono"
                     placeholder={t.contact.placeholders.name}
                   />
                </div>
                <div className="space-y-2 group">
                   <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider group-focus-within:text-white transition-colors">{t.contact.labels.email}</label>
                   <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all font-mono"
                     placeholder={t.contact.placeholders.email}
                   />
                </div>
              </div>

              <div className="space-y-2 group">
                   <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider group-focus-within:text-white transition-colors">{t.contact.labels.subject}</label>
                   <select
                     name="asunto"
                     value={formData.asunto}
                     onChange={handleChange}
                     className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all appearance-none font-mono"
                   >
                      <option value="">Selecciona un asunto</option>
                      {t.contact.options.map((option: string, i: number) => (
                         <option key={i} value={option}>{option}</option>
                      ))}
                   </select>
              </div>

              <div className="space-y-2 group">
                   <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider group-focus-within:text-white transition-colors">{t.contact.labels.message}</label>
                   <textarea
                     rows={5}
                     name="mensaje"
                     value={formData.mensaje}
                     onChange={handleChange}
                     className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all font-mono"
                     placeholder={t.contact.placeholders.message}
                   ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-brand-cyan transition-colors flex items-center justify-center gap-2 font-display tracking-widest uppercase"
              >
                <Send size={18} /> {t.contact.btn_send}
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-7xl font-bold text-white/5 mb-12 font-display">{t.contact.info_title}</h3>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-black transition-all">
                     <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{t.contact.info_mail}</p>
                    <p className="text-white text-xl font-medium">henry.orellana@starbiz.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                     <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{t.contact.info_phone}</p>
                    <p className="text-white text-xl font-medium">+1 (801) 941-3479</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                     <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{t.contact.info_loc}</p>
                    <p className="text-white text-xl font-medium">{t.contact.loc_val}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <div className="flex gap-4">
                 {[Instagram, Facebook, Twitter].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-black text-gray-400 transition-all">
                     <Icon size={20} />
                   </a>
                 ))}
               </div>
               <div className="mt-8 pt-8 border-t border-white/5 text-gray-600 text-sm font-mono">
                  SYSTEM STATUS: ONLINE <br/>
                  &copy; {new Date().getFullYear()} STARBIZ ACADEMY. ALL RIGHTS RESERVED.
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
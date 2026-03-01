import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Headphones, Mail, MessageCircle, HelpCircle, AlertTriangle, BookOpen, Shield } from 'lucide-react';

const CEOJuniorSupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to="/ceo-junior"
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Volver a CEO Junior</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-2xl mb-6">
            <Headphones size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Centro de Soporte
          </h1>
          <p className="text-xl text-gray-400">
            CEO Junior - Starbiz Academy
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Estamos aquí para ayudarte</h2>
          <p className="text-gray-300 leading-relaxed">
            Si tienes alguna pregunta, problema técnico o sugerencia sobre CEO Junior,
            nuestro equipo de soporte está disponible para asistirte. A continuación
            encontrarás las respuestas a las preguntas más frecuentes y las formas de contactarnos.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-brand-cyan/20 rounded-xl flex items-center justify-center">
              <HelpCircle size={24} className="text-brand-cyan" />
            </div>
            <h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">¿Cómo inicio sesión en CEO Junior?</h3>
              <p className="text-gray-300 leading-relaxed">
                Necesitas tu correo electrónico, contraseña y el código de estudiante (formato E-XXXXXXXX)
                que te proporcionó tu padre o madre al activar la membresía familiar.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">¿Olvidé mi código de estudiante, qué hago?</h3>
              <p className="text-gray-300 leading-relaxed">
                Tu padre o madre puede ver tu código de estudiante desde la app Padres 3.0
                en la sección de hijos. Si no tienen acceso, contacta a nuestro equipo de soporte.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">¿Las mini-apps no cargan correctamente?</h3>
              <p className="text-gray-300 leading-relaxed">
                Verifica que tengas una conexión a internet estable. Si el problema persiste,
                cierra la sesión y vuelve a iniciarla. Si continúa, contáctanos con los
                detalles del error.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">¿Cómo puedo ver mi progreso en los cursos?</h3>
              <p className="text-gray-300 leading-relaxed">
                Tu progreso se muestra dentro de cada mini-app educativa (StarEduca, StarReads, StarGenius).
                Además, tu padre o madre puede ver un resumen de tu progreso desde Padres 3.0.
              </p>
            </div>
          </div>
        </section>

        {/* Report Problem */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
              <AlertTriangle size={24} className="text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold">Reportar un Problema</h2>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            Si experimentas un error técnico o un comportamiento inesperado en la aplicación,
            por favor incluye la siguiente información al contactarnos:
          </p>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span>Descripción del problema (qué estabas haciendo cuando ocurrió)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span>Dispositivo y versión del sistema operativo (ej: iPhone 15, iOS 18)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span>Captura de pantalla del error (si es posible)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span>Tu correo electrónico asociado a la cuenta</span>
            </li>
          </ul>
        </section>

        {/* Useful Links */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-brand-purple/20 rounded-xl flex items-center justify-center">
              <BookOpen size={24} className="text-brand-purple" />
            </div>
            <h2 className="text-2xl font-bold">Enlaces Útiles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/ceo-junior/politica-privacidad"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors"
            >
              <Shield size={20} className="text-brand-cyan" />
              <span className="text-gray-300">Política de Privacidad</span>
            </Link>
            <Link
              to="/ceo-junior/privacidad"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors"
            >
              <Shield size={20} className="text-brand-cyan" />
              <span className="text-gray-300">Gestión de Datos Personales</span>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-brand-orange/20 to-brand-yellow/20 rounded-2xl p-8 border border-brand-orange/30">
          <h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>
          <p className="text-gray-300 text-center mb-8">
            Nuestro equipo de soporte está disponible para ayudarte. Escríbenos por cualquiera de estos medios:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:soporte@starbizacademy.com?subject=Soporte%20CEO%20Junior"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-colors group"
            >
              <div className="w-14 h-14 bg-brand-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-brand-cyan/30 transition-colors">
                <Mail size={28} className="text-brand-cyan" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Correo electrónico</p>
                <p className="text-lg font-semibold">soporte@starbizacademy.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/13854564470?text=Hola%2C%20necesito%20ayuda%20con%20CEO%20Junior"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-colors group"
            >
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <MessageCircle size={28} className="text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                <p className="text-lg font-semibold">+1 (385) 456-4470</p>
              </div>
            </a>
          </div>

          <p className="text-gray-400 text-sm text-center mt-6">
            Tiempo de respuesta estimado: 24-48 horas hábiles
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Starbiz Academy. Todos los derechos reservados.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 text-brand-cyan hover:text-white transition-colors"
          >
            Volver al inicio
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default CEOJuniorSupportPage;

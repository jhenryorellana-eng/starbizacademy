import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Eye, Edit3, Trash2, Shield } from 'lucide-react';

const Parents30PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to="/padres-3"
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Volver a Padres 3.0</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-cyan rounded-2xl mb-6">
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gestión de Datos Personales
          </h1>
          <p className="text-xl text-gray-400">
            Padres 3.0 - Starbiz Academy
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Nuestro Compromiso con tu Privacidad</h2>
          <p className="text-gray-300 leading-relaxed">
            En Starbiz Academy nos tomamos muy en serio la privacidad de nuestros usuarios.
            Como usuario de Padres 3.0, tienes derecho a solicitar acceso, modificación o
            eliminación de tus datos personales en cualquier momento. A continuación te
            explicamos cómo hacerlo.
          </p>
        </section>

        {/* Data We Collect */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Información que Recopilamos</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Nombre completo y correo electrónico</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Código familiar de padre (P-XXXXXXXX)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Información de hijos vinculados</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Progreso en cursos y actividades educativas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Preferencias de la aplicación</span>
            </li>
          </ul>
        </section>

        {/* View Data */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Eye size={24} className="text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">Solicitar Ver tus Datos</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Puedes solicitar una copia completa de todos los datos personales que tenemos
            almacenados sobre ti. Para hacerlo:
          </p>
          <ol className="space-y-3 text-gray-300 list-decimal list-inside ml-4">
            <li>Envía un correo electrónico a la dirección indicada abajo</li>
            <li>Incluye en el asunto: "Solicitud de Acceso a Datos - Padres 3.0"</li>
            <li>En el cuerpo del mensaje, proporciona tu nombre completo y el correo electrónico asociado a tu cuenta</li>
            <li>Recibirás una respuesta en un plazo máximo de 30 días</li>
          </ol>
        </section>

        {/* Edit Data */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
              <Edit3 size={24} className="text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold">Solicitar Editar tus Datos</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Si alguno de tus datos personales es incorrecto o está desactualizado, puedes
            solicitar su corrección:
          </p>
          <ol className="space-y-3 text-gray-300 list-decimal list-inside ml-4">
            <li>Envía un correo electrónico a la dirección indicada abajo</li>
            <li>Incluye en el asunto: "Solicitud de Corrección de Datos - Padres 3.0"</li>
            <li>Especifica qué datos deseas corregir y proporciona la información correcta</li>
            <li>Incluye tu nombre completo y correo electrónico de la cuenta</li>
            <li>Los cambios se procesarán en un plazo máximo de 15 días</li>
          </ol>
        </section>

        {/* Delete Data */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <Trash2 size={24} className="text-red-400" />
            </div>
            <h2 className="text-2xl font-bold">Solicitar Eliminar tus Datos</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Tienes derecho a solicitar la eliminación completa de tus datos personales de
            nuestros sistemas. Ten en cuenta que esto resultará en la pérdida permanente de
            tu progreso y acceso a la aplicación.
          </p>
          <ol className="space-y-3 text-gray-300 list-decimal list-inside ml-4">
            <li>Envía un correo electrónico a la dirección indicada abajo</li>
            <li>Incluye en el asunto: "Solicitud de Eliminación de Datos - Padres 3.0"</li>
            <li>Confirma que entiendes que esta acción es irreversible</li>
            <li>Proporciona tu nombre completo y correo electrónico de la cuenta</li>
            <li>La eliminación se completará en un plazo máximo de 30 días</li>
          </ol>
          <div className="mt-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
            <p className="text-red-300 text-sm">
              <strong>Importante:</strong> La eliminación de datos es permanente e irreversible.
              Perderás todo tu progreso, información de hijos vinculados y acceso a Padres 3.0.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-2xl p-8 border border-brand-purple/30">
          <h2 className="text-2xl font-bold mb-6 text-center">Información de Contacto</h2>
          <p className="text-gray-300 text-center mb-8">
            Para cualquier solicitud relacionada con tus datos personales, contáctanos a través de:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:jhenry.orellana@gmail.com?subject=Solicitud%20de%20Datos%20-%20Padres%203.0"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-colors group"
            >
              <div className="w-14 h-14 bg-brand-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-brand-cyan/30 transition-colors">
                <Mail size={28} className="text-brand-cyan" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Correo electrónico</p>
                <p className="text-lg font-semibold">jhenry.orellana@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+18019413479"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-colors group"
            >
              <div className="w-14 h-14 bg-brand-purple/20 rounded-xl flex items-center justify-center group-hover:bg-brand-purple/30 transition-colors">
                <Phone size={28} className="text-brand-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Teléfono</p>
                <p className="text-lg font-semibold">+1 (801) 941-3479</p>
              </div>
            </a>
          </div>
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

export default Parents30PrivacyPage;

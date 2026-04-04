import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const Parents30TermsPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <FileText size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terminos de Servicio
          </h1>
          <p className="text-xl text-gray-400">
            Padres 3.0 - Starbiz Academy
          </p>
          <p className="text-gray-500 mt-4">
            Ultima actualizacion: 3 de abril de 2026
          </p>
        </div>

        {/* Table of Contents */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">Tabla de Contenidos</h2>
          <nav className="grid md:grid-cols-2 gap-2">
            {[
              { id: 'section-1', title: '1. Aceptacion de los Terminos' },
              { id: 'section-2', title: '2. Descripcion del Servicio' },
              { id: 'section-3', title: '3. Registro y Cuentas' },
              { id: 'section-4', title: '4. Suscripciones y Pagos' },
              { id: 'section-5', title: '5. Renovacion Automatica y Cancelacion' },
              { id: 'section-6', title: '6. Reembolsos' },
              { id: 'section-7', title: '7. Uso Aceptable' },
              { id: 'section-8', title: '8. Propiedad Intelectual' },
              { id: 'section-9', title: '9. Contenido del Usuario' },
              { id: 'section-10', title: '10. Limitacion de Responsabilidad' },
              { id: 'section-11', title: '11. Modificaciones a los Terminos' },
              { id: 'section-12', title: '12. Terminacion' },
              { id: 'section-13', title: '13. Contacto' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-300 hover:text-brand-cyan transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
              >
                {item.title}
              </button>
            ))}
          </nav>
        </section>

        {/* Introduction */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <p className="text-gray-300 leading-relaxed mb-4">
            Estos Terminos de Servicio ("Terminos") constituyen un acuerdo legal entre usted y{' '}
            <strong>Starbiz Academy LLC</strong> ("nosotros", "nos" o "nuestro") que rige el uso de
            la aplicacion movil Padres 3.0 y los servicios relacionados (colectivamente, los "Servicios").
          </p>
          <p className="text-gray-300 leading-relaxed">
            Al descargar, instalar o utilizar Padres 3.0, usted acepta estos Terminos en su totalidad.
            Si no esta de acuerdo con estos Terminos, no utilice los Servicios.
          </p>
        </section>

        {/* Section 1 */}
        <section id="section-1" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">1. Aceptacion de los Terminos</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Al acceder o utilizar los Servicios, usted confirma que:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Tiene al menos 18 anos de edad o la mayoria de edad legal en su jurisdiccion</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Tiene la capacidad legal para celebrar este acuerdo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Utilizara los Servicios de acuerdo con estos Terminos y las leyes aplicables</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Es padre, madre o tutor legal de los menores vinculados a su cuenta</span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">2. Descripcion del Servicio</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Padres 3.0 es una aplicacion de tecnologia familiar (FamilyTech) que forma parte del
            ecosistema Starbiz Academy. La aplicacion permite a los padres:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span>Gestionar la membresia familiar y los perfiles de sus hijos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span>Acceder a mini aplicaciones educativas dentro del ecosistema</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span>Supervisar el progreso educativo de sus hijos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span>Generar y gestionar codigos familiares para vincular dispositivos</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">3. Registro y Cuentas</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Para utilizar los Servicios, debe crear una cuenta proporcionando informacion precisa y
            completa. Usted es responsable de:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Mantener la confidencialidad de sus credenciales de acceso</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Todas las actividades que ocurran bajo su cuenta</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>La veracidad de la informacion de los menores vinculados a su cuenta</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Nos reservamos el derecho de suspender o terminar cuentas que violen estos Terminos o que
            contengan informacion falsa.
          </p>
        </section>

        {/* Section 4 - Subscriptions */}
        <section id="section-4" className="bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-2xl p-8 mb-8 border border-brand-purple/30">
          <h2 className="text-2xl font-bold mb-6">4. Suscripciones y Pagos</h2>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Planes de Suscripcion</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Padres 3.0 ofrece suscripciones de renovacion automatica a traves del Plan Familiar.
            Los planes varian segun el numero de hijos y el ciclo de facturacion:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span><strong>Suscripcion Mensual:</strong> Se factura cada mes desde la fecha de compra</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span><strong>Suscripcion Anual:</strong> Se factura una vez al ano desde la fecha de compra</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Procesamiento de Pagos</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Los pagos se procesan a traves de la plataforma de la tienda de aplicaciones correspondiente
            (Apple App Store o Google Play Store). Al suscribirse, usted autoriza el cargo recurrente
            a su metodo de pago registrado en la tienda de aplicaciones.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Precios</h3>
          <p className="text-gray-300 leading-relaxed">
            Los precios se muestran en la aplicacion antes de la compra e incluyen los impuestos
            aplicables segun su ubicacion. Los precios pueden variar segun el pais o region y estan
            sujetos a cambios. Le notificaremos sobre cualquier cambio de precio antes de que entre
            en vigor.
          </p>
        </section>

        {/* Section 5 - Auto-renewal */}
        <section id="section-5" className="bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-2xl p-8 mb-8 border border-brand-purple/30">
          <h2 className="text-2xl font-bold mb-6">5. Renovacion Automatica y Cancelacion</h2>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Renovacion Automatica</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Su suscripcion se renovara automaticamente al final de cada periodo de facturacion
            (mensual o anual) a menos que la cancele. El cargo por la renovacion se realizara
            dentro de las 24 horas anteriores al final del periodo actual, al precio vigente.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Como Cancelar</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Puede cancelar su suscripcion en cualquier momento. La cancelacion entrara en vigor al
            final del periodo de facturacion actual. Para cancelar:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span><strong>En iPhone/iPad:</strong> Abra Configuracion &gt; [su nombre] &gt; Suscripciones &gt; Padres 3.0 &gt; Cancelar suscripcion</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span><strong>En Android:</strong> Abra Google Play Store &gt; Menu &gt; Suscripciones &gt; Padres 3.0 &gt; Cancelar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span><strong>Desde la app:</strong> Vaya a Cuenta &gt; Membresia &gt; Administrar suscripcion</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Tras la cancelacion, mantendra acceso a los Servicios hasta el final del periodo de
            facturacion ya pagado. No se realizaran cargos adicionales despues de la cancelacion.
          </p>
        </section>

        {/* Section 6 - Refunds */}
        <section id="section-6" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">6. Reembolsos</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Las solicitudes de reembolso se gestionan a traves de la tienda de aplicaciones donde
            realizo la compra:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span><strong>Apple App Store:</strong> Visite reportaproblem.apple.com para solicitar un reembolso</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span><strong>Google Play Store:</strong> Solicite un reembolso a traves de Google Play dentro de las 48 horas posteriores a la compra, o contacte a nuestro soporte</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Los reembolsos estan sujetos a las politicas de la tienda de aplicaciones correspondiente.
            Starbiz Academy no procesa reembolsos directamente para compras realizadas a traves de
            las tiendas de aplicaciones.
          </p>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">7. Uso Aceptable</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Al utilizar los Servicios, usted se compromete a no:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Utilizar los Servicios para cualquier proposito ilegal o no autorizado</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Compartir su cuenta o credenciales con terceros</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Intentar acceder a areas restringidas del sistema o de otros usuarios</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Realizar ingenieria inversa, descompilar o desensamblar los Servicios</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Publicar contenido ofensivo, difamatorio o que viole derechos de terceros</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Vincular menores que no esten bajo su tutela legal</span>
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section id="section-8" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">8. Propiedad Intelectual</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Todos los derechos de propiedad intelectual sobre los Servicios, incluyendo pero no limitado
            a software, disenos, textos, graficos, logos, iconos y contenido educativo, son propiedad
            exclusiva de Starbiz Academy LLC o sus licenciantes.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Se le otorga una licencia limitada, no exclusiva, no transferible y revocable para usar
            los Servicios de acuerdo con estos Terminos. Esta licencia no le otorga ningun derecho
            de propiedad sobre los Servicios ni su contenido.
          </p>
        </section>

        {/* Section 9 */}
        <section id="section-9" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">9. Contenido del Usuario</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Usted conserva la propiedad de cualquier contenido que genere o suba a traves de los
            Servicios. Sin embargo, al publicar contenido, nos otorga una licencia mundial, no
            exclusiva y libre de regalias para usar, reproducir y mostrar dicho contenido en
            conexion con la operacion de los Servicios.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Nos reservamos el derecho de eliminar contenido que viole estos Terminos o que
            consideremos inapropiado, a nuestra exclusiva discrecion.
          </p>
        </section>

        {/* Section 10 */}
        <section id="section-10" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">10. Limitacion de Responsabilidad</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            En la maxima medida permitida por la ley aplicable, Starbiz Academy LLC no sera responsable
            por danos indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pero
            no limitado a perdida de datos, perdida de ingresos o interrupcion del negocio, que surjan
            del uso o la incapacidad de usar los Servicios.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Los Servicios se proporcionan "tal cual" y "segun disponibilidad". No garantizamos que
            los Servicios seran ininterrumpidos, libres de errores o completamente seguros.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Nuestra responsabilidad total acumulada por todas las reclamaciones relacionadas con los
            Servicios no excedera el monto total pagado por usted en los doce (12) meses anteriores
            al evento que dio origen a la reclamacion.
          </p>
        </section>

        {/* Section 11 */}
        <section id="section-11" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">11. Modificaciones a los Terminos</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Nos reservamos el derecho de modificar estos Terminos en cualquier momento. Le
            notificaremos sobre cambios significativos a traves de la aplicacion o por correo
            electronico con al menos 30 dias de anticipacion.
          </p>
          <p className="text-gray-300 leading-relaxed">
            El uso continuado de los Servicios despues de la entrada en vigor de los Terminos
            modificados constituira su aceptacion de dichos cambios. Si no esta de acuerdo con
            los nuevos Terminos, debe dejar de usar los Servicios y cancelar su suscripcion.
          </p>
        </section>

        {/* Section 12 */}
        <section id="section-12" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">12. Terminacion</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Podemos suspender o terminar su acceso a los Servicios en cualquier momento, con o sin
            causa, y con o sin aviso previo. En caso de terminacion:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Se cancelara su suscripcion activa</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Se desvincularan las cuentas de los menores asociados</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Sus datos se manejaran de acuerdo con nuestra Politica de Privacidad</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            Usted puede eliminar su cuenta en cualquier momento desde la seccion Cuenta &gt;
            Eliminar mi cuenta dentro de la aplicacion.
          </p>
        </section>

        {/* Section 13 - Contact */}
        <section id="section-13" className="bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-2xl p-8 mb-8 border border-brand-purple/30">
          <h2 className="text-2xl font-bold mb-6">13. Contacto</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Si tiene preguntas sobre estos Terminos de Servicio, puede contactarnos a traves de:
          </p>
          <div className="bg-white/10 rounded-xl p-6">
            <p className="text-white font-semibold text-lg mb-2">Starbiz Academy LLC</p>
            <p className="text-gray-300">10951 N. Town Center Drive</p>
            <p className="text-gray-300">Highland, UT 84003</p>
            <p className="text-gray-300">Estados Unidos</p>
            <p className="text-brand-cyan mt-4">
              <a href="mailto:privacidad@starbizacademy.com" className="hover:text-white transition-colors">
                privacidad@starbizacademy.com
              </a>
            </p>
          </div>
        </section>

        {/* Apple EULA Notice */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">Informacion Adicional para Usuarios de Apple</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Este acuerdo es entre usted y Starbiz Academy LLC, no con Apple Inc. Starbiz Academy LLC
            es el unico responsable de la aplicacion Padres 3.0 y su contenido. El uso de la
            aplicacion esta sujeto ademas a los Terminos de Servicio del App Store de Apple.
          </p>
          <p className="text-gray-300 leading-relaxed">
            En caso de conflicto entre estos Terminos y los Terminos del App Store de Apple, los
            Terminos del App Store prevaleceran en la medida del conflicto.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Starbiz Academy. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link
              to="/padres-3/politica-privacidad"
              className="text-brand-cyan hover:text-white transition-colors"
            >
              Politica de Privacidad
            </Link>
            <Link
              to="/padres-3/privacidad"
              className="text-brand-cyan hover:text-white transition-colors"
            >
              Gestion de Datos
            </Link>
            <Link
              to="/"
              className="text-brand-cyan hover:text-white transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Parents30TermsPage;

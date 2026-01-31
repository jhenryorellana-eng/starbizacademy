import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const Parents30PolicyPage: React.FC = () => {
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
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-400">
            Padres 3.0 - Starbiz Academy
          </p>
          <p className="text-gray-500 mt-4">
            Última actualización: 30 de enero de 2025
          </p>
        </div>

        {/* Table of Contents */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">Tabla de Contenidos</h2>
          <nav className="grid md:grid-cols-2 gap-2">
            {[
              { id: 'section-1', title: '1. ¿Qué información recopilamos?' },
              { id: 'section-2', title: '2. ¿Cómo procesamos su información?' },
              { id: 'section-3', title: '3. ¿Con quién compartimos su información?' },
              { id: 'section-4', title: '4. ¿Usamos cookies y tecnologías de rastreo?' },
              { id: 'section-5', title: '5. ¿Ofrecemos productos basados en IA?' },
              { id: 'section-6', title: '6. ¿Cuánto tiempo conservamos su información?' },
              { id: 'section-7', title: '7. ¿Cómo mantenemos segura su información?' },
              { id: 'section-8', title: '8. ¿Cuáles son sus derechos de privacidad?' },
              { id: 'section-9', title: '9. Controles para funciones No-Rastrear' },
              { id: 'section-10', title: '10. Derechos de residentes de EE.UU.' },
              { id: 'section-11', title: '11. ¿Actualizamos este aviso?' },
              { id: 'section-12', title: '12. ¿Cómo puede contactarnos?' },
              { id: 'section-13', title: '13. ¿Cómo revisar, actualizar o eliminar sus datos?' },
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
            Este aviso de privacidad para <strong>Starbiz Academy LLC</strong> ("nosotros", "nos" o "nuestro"),
            describe cómo y por qué podríamos recopilar, almacenar, usar y/o compartir ("procesar") su
            información cuando utiliza nuestros servicios ("Servicios"), como cuando:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Descarga y utiliza nuestra aplicación móvil (Padres 3.0), o cualquier otra aplicación nuestra que enlace a este aviso de privacidad</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Interactúa con nosotros de otras maneras relacionadas, incluyendo ventas, marketing o eventos</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            <strong>¿Preguntas o inquietudes?</strong> Leer este aviso de privacidad le ayudará a entender sus
            derechos y opciones de privacidad. Si no está de acuerdo con nuestras políticas y prácticas, por
            favor no utilice nuestros Servicios.
          </p>
        </section>

        {/* Section 1 */}
        <section id="section-1" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">1. ¿Qué información recopilamos?</h2>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Información personal que nos proporciona</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Recopilamos información personal que usted nos proporciona voluntariamente cuando se registra
            en los Servicios, expresa interés en obtener información sobre nosotros o nuestros productos y
            Servicios, participa en actividades en los Servicios, o se comunica con nosotros.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Información personal proporcionada por usted.</strong> La información personal que
            recopilamos depende del contexto de sus interacciones con nosotros y los Servicios, las
            elecciones que hace, y los productos y características que utiliza. La información personal
            que recopilamos puede incluir lo siguiente:
          </p>

          <ul className="space-y-2 text-gray-300 ml-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Nombres</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Números de teléfono</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Direcciones de correo electrónico</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Contraseñas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Datos de contacto o autenticación</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Código familiar de padre (P-XXXXXXXX)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Información de hijos vinculados</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Información sensible</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            No procesamos información sensible.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Datos de la aplicación</h3>
          <p className="text-gray-300 leading-relaxed">
            Si utiliza nuestra(s) aplicación(es), también podemos recopilar la siguiente información si
            elige proporcionarnos acceso o permiso:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4 mt-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span><strong>Notificaciones push.</strong> Podemos solicitar enviarle notificaciones push sobre su cuenta o ciertas características de la(s) aplicación(es). Si desea optar por no recibir estos tipos de comunicaciones, puede desactivarlas en la configuración de su dispositivo.</span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">2. ¿Cómo procesamos su información?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Procesamos su información personal por una variedad de razones, dependiendo de cómo interactúe
            con nuestros Servicios, incluyendo:
          </p>
          <ul className="space-y-3 text-gray-300 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span><strong>Para facilitar la creación y autenticación de cuentas y administrar cuentas de usuario.</strong> Podemos procesar su información para que pueda crear e iniciar sesión en su cuenta, así como mantener su cuenta en funcionamiento.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span><strong>Para entregar y facilitar la entrega de servicios al usuario.</strong> Podemos procesar su información para proporcionarle el servicio solicitado.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span><strong>Para responder a consultas de usuarios/ofrecer soporte a usuarios.</strong> Podemos procesar su información para responder a sus consultas y resolver cualquier problema potencial que pueda tener con el servicio solicitado.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span><strong>Para enviar información administrativa.</strong> Podemos procesar su información para enviarle detalles sobre nuestros productos y servicios, cambios en nuestros términos y políticas, y otra información similar.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span><strong>Para guardar o proteger el interés vital de un individuo.</strong> Podemos procesar su información cuando sea necesario para guardar o proteger el interés vital de un individuo, como para prevenir daños.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span><strong>Para vincular y monitorear cuentas de hijos.</strong> Como padre, podemos procesar información para permitirle vincular y supervisar las cuentas de sus hijos en CEO Junior.</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">3. ¿Cuándo y con quién compartimos su información personal?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Podemos necesitar compartir su información personal en las siguientes situaciones:
          </p>
          <ul className="space-y-3 text-gray-300 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span><strong>Transferencias comerciales.</strong> Podemos compartir o transferir su información en conexión con, o durante negociaciones de, cualquier fusión, venta de activos de la empresa, financiamiento o adquisición de todo o parte de nuestro negocio a otra empresa.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span><strong>Cuando utilizamos las API de Google Maps Platform.</strong> Podemos compartir su información con ciertas API de Google Maps Platform (por ejemplo, API de Google Maps, API de Places).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span><strong>Vinculación familiar.</strong> Información limitada puede compartirse entre cuentas de padres e hijos dentro de la misma familia para facilitar la supervisión parental.</span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">4. ¿Usamos cookies y otras tecnologías de rastreo?</h2>
          <p className="text-gray-300 leading-relaxed">
            Podemos usar cookies y tecnologías de rastreo similares (como web beacons y píxeles) para
            acceder o almacenar información. La información específica sobre cómo usamos dichas tecnologías
            y cómo puede rechazar ciertas cookies se establece en nuestro Aviso de Cookies.
          </p>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">5. ¿Ofrecemos productos basados en inteligencia artificial?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Como parte de nuestros Servicios, ofrecemos productos impulsados por inteligencia artificial (IA).
            Estas características están diseñadas para mejorar la experiencia educativa de nuestros usuarios
            y facilitar el seguimiento del progreso de sus hijos.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Nuestros productos de IA</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Nuestros productos de IA están diseñados para funciones educativas específicas. Al usar nuestros
            productos de IA, usted reconoce y acepta:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>El contenido generado por IA es para fines educativos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>No debe confiar únicamente en el contenido generado por IA para tomar decisiones importantes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>No proporcione información personal sensible en las interacciones de IA</span>
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">6. ¿Cuánto tiempo conservamos su información?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Solo mantendremos su información personal durante el tiempo que sea necesario para los fines
            establecidos en este aviso de privacidad, a menos que la ley requiera o permita un período de
            retención más largo (como requisitos fiscales, contables u otros requisitos legales).
          </p>
          <p className="text-gray-300 leading-relaxed">
            Cuando no tengamos una necesidad comercial legítima continua de procesar su información personal,
            eliminaremos o anonimizaremos dicha información, o, si esto no es posible (por ejemplo, porque
            su información personal se ha almacenado en archivos de respaldo), almacenaremos de forma segura
            su información personal y la aislaremos de cualquier procesamiento adicional hasta que sea
            posible la eliminación.
          </p>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">7. ¿Cómo mantenemos segura su información?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hemos implementado medidas de seguridad técnicas y organizativas apropiadas y razonables
            diseñadas para proteger la seguridad de cualquier información personal que procesamos. Sin
            embargo, a pesar de nuestras salvaguardas y esfuerzos por asegurar su información, ninguna
            transmisión electrónica a través de Internet o tecnología de almacenamiento de información
            puede garantizarse como 100% segura, por lo que no podemos prometer ni garantizar que hackers,
            ciberdelincuentes u otros terceros no autorizados no podrán vencer nuestra seguridad y recopilar,
            acceder, robar o modificar indebidamente su información.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Aunque haremos nuestro mejor esfuerzo para proteger su información personal, la transmisión de
            información personal hacia y desde nuestros Servicios es bajo su propio riesgo. Solo debe
            acceder a los Servicios dentro de un entorno seguro.
          </p>
        </section>

        {/* Section 8 */}
        <section id="section-8" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">8. ¿Cuáles son sus derechos de privacidad?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            En algunas regiones (como el EEE, Reino Unido, Suiza y Canadá), usted tiene ciertos derechos
            bajo las leyes de protección de datos aplicables. Estos pueden incluir el derecho a:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Solicitar acceso y obtener una copia de su información personal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Solicitar rectificación o eliminación</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Restringir el procesamiento de su información personal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Portabilidad de datos (si corresponde)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>No estar sujeto a la toma de decisiones automatizada</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Retiro del consentimiento</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Si confiamos en su consentimiento para procesar su información personal, tiene derecho a retirar
            su consentimiento en cualquier momento. Puede retirar su consentimiento en cualquier momento
            contactándonos usando los detalles de contacto proporcionados en la sección "¿Cómo puede
            contactarnos sobre este aviso?" a continuación.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Información de la cuenta</h3>
          <p className="text-gray-300 leading-relaxed">
            Si en algún momento desea revisar o cambiar la información en su cuenta o terminar su cuenta,
            puede contactarnos usando la información de contacto proporcionada. Tras su solicitud de
            terminar su cuenta, desactivaremos o eliminaremos su cuenta e información de nuestras bases
            de datos activas. Sin embargo, podemos retener cierta información en nuestros archivos para
            prevenir fraude, solucionar problemas, ayudar con cualquier investigación, hacer cumplir
            nuestros términos legales y/o cumplir con los requisitos legales aplicables.
          </p>
        </section>

        {/* Section 9 */}
        <section id="section-9" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">9. Controles para funciones No-Rastrear</h2>
          <p className="text-gray-300 leading-relaxed">
            La mayoría de los navegadores web y algunos sistemas operativos móviles y aplicaciones móviles
            incluyen una función o configuración No-Rastrear ("DNT") que puede activar para señalar su
            preferencia de privacidad de no tener datos sobre sus actividades de navegación en línea
            monitoreados y recopilados. En esta etapa no se ha finalizado ningún estándar de tecnología
            uniforme para reconocer e implementar señales DNT. Como tal, actualmente no respondemos a las
            señales del navegador DNT ni a ningún otro mecanismo que comunique automáticamente su elección
            de no ser rastreado en línea. Si se adopta un estándar para el seguimiento en línea que debemos
            seguir en el futuro, le informaremos sobre esa práctica en una versión revisada de este aviso
            de privacidad.
          </p>
        </section>

        {/* Section 10 */}
        <section id="section-10" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">10. ¿Los residentes de Estados Unidos tienen derechos de privacidad específicos?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Si es residente de California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
            Montana, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah o Virginia, se le otorgan
            derechos específicos con respecto al acceso a su información personal.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">¿Qué categorías de información personal recopilamos?</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hemos recopilado las siguientes categorías de información personal en los últimos doce (12) meses:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span><strong>Categoría A - Identificadores:</strong> Nombre, dirección de correo electrónico, número de teléfono</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0" />
              <span><strong>Categoría B - Información personal según la Ley de Registros de Clientes de California:</strong> Nombre, información de contacto, información de hijos vinculados</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">Sus derechos</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Tiene derechos bajo ciertas leyes de privacidad de datos de EE.UU. Sin embargo, estos derechos
            no son absolutos, y en ciertos casos, podemos rechazar su solicitud según lo permita la ley.
            Estos derechos incluyen:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Derecho a saber si estamos procesando sus datos personales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Derecho a acceder a sus datos personales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Derecho a corregir inexactitudes en sus datos personales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Derecho a solicitar la eliminación de sus datos personales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Derecho a obtener una copia de los datos personales que compartió previamente con nosotros</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0" />
              <span>Derecho a no discriminación por ejercer sus derechos</span>
            </li>
          </ul>
        </section>

        {/* Section 11 */}
        <section id="section-11" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">11. ¿Hacemos actualizaciones a este aviso?</h2>
          <p className="text-gray-300 leading-relaxed">
            Podemos actualizar este aviso de privacidad de vez en cuando. La versión actualizada se
            indicará con una fecha "Revisado" actualizada y la versión actualizada entrará en vigor tan
            pronto como sea accesible. Si hacemos cambios materiales a este aviso de privacidad, podemos
            notificarle ya sea publicando de manera prominente un aviso de dichos cambios o enviándole
            directamente una notificación. Le animamos a revisar este aviso de privacidad con frecuencia
            para estar informado de cómo estamos protegiendo su información.
          </p>
        </section>

        {/* Section 12 */}
        <section id="section-12" className="bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-2xl p-8 mb-8 border border-brand-purple/30">
          <h2 className="text-2xl font-bold mb-6">12. ¿Cómo puede contactarnos sobre este aviso?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Si tiene preguntas o comentarios sobre este aviso, puede enviarnos un correo electrónico o
            contactarnos por correo postal a:
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

        {/* Section 13 */}
        <section id="section-13" className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">13. ¿Cómo puede revisar, actualizar o eliminar los datos que recopilamos de usted?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Según las leyes aplicables de su país, puede tener derecho a solicitar acceso a la información
            personal que recopilamos de usted, cambiar esa información o eliminarla.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Para solicitar revisar, actualizar o eliminar su información personal, visite nuestra página de{' '}
            <Link to="/padres-3/privacidad" className="text-brand-cyan hover:text-white transition-colors">
              Gestión de Datos Personales
            </Link>.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Starbiz Academy. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link
              to="/padres-3/privacidad"
              className="text-brand-cyan hover:text-white transition-colors"
            >
              Gestión de Datos
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

export default Parents30PolicyPage;

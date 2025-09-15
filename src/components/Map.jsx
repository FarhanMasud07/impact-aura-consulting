const Map = () => { 
    return (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold text-zinc-900">Our Location</h2>
              <p className="text-slate-600">MATRICHAYA, Dhaka, Bangladesh</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902!2d90.3345469!3d23.7556375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfe4422007fd%3A0x93c7f51693220f7d!2sMATRICHAYA!5e0!3m2!1sen!2sbd!4v1690000000000!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ImpactAura Location Map"
              ></iframe>
            </div>
          </div>
        </section>
    );
};

export default Map;
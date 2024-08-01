/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722514859", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-2xl shadow-xl p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">Get Started with Our Code</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-white text-opacity-90 md:text-lg">Streamline your development process with our pre-built templates.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-30 hover:bg-opacity-40 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 backdrop-filter backdrop-blur-sm transition duration-300 ease-in-out transform hover:scale-105">STARTER_TEMPLATE_CALL_TO_ACTION_Hello World</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

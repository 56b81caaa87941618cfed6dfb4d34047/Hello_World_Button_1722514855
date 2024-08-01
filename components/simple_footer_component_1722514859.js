/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722514859", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-400 to-purple-600 backdrop-blur-md bg-opacity-30 shadow-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-16 md:p-12 lg:p-16 rounded-2xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 shadow-xl">
                <hr id="footer-divider" class="my-8 border-white border-opacity-20">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-10 filter drop-shadow-lg" alt="Landwind Logo" />
                            Hello World App
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white text-opacity-80 font-medium">
                        Made with ❤️ by the Hello World team. Click the 'Hello World' button to get started!
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

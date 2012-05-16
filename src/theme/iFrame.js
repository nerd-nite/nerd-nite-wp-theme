/*jshint dojo:true devel:true strict:false*/
define([
    'vodori/amd/tinymce',
    'vodori/provide', 'module',
    './ConfigurableTransformer',
    './util/getResourceUrl',  './util/getPluginName',
    './util/objectToProps', './util/propsToObject',
        'vodori/ui/IFrame'
], function (
    tinymce,
    provide, module,
    ConfigurableTransformer,
    getResourceUrl, getPluginName,
    objectToProps, propsToObject
    ) {

    var pluginName = getPluginName(module);

    var resourceUrl = getResourceUrl(module);

    var plugin = provide(module.id, [ConfigurableTransformer], {

        dijitDeclaredClass: 'vodori.ui.IFrame',

        url: resourceUrl,
        resourceUrl: resourceUrl,

        pluginName: pluginName,

        title: "iFrame",

        placeholderClass: 'mceIFramePlaceholder',

        popupWidth: 390,
        popupHeight: 200,

        wrapperTagName: 'iframe',
        placeHolderWrapperTagName: 'img',

        button: {
            label: '',
            image: 'iframe.gif',
            title: 'Insert an iFrame.',
            changeStates: {
                highlight: [pluginName],
                enable: [],
                disable: ['image']
            }
        },

        styleSheet: true,

        defaultAttrs: {
            iframeSrc: '',
            iframeHeight: '200',
            iframeWidth: '300'
        },

        init: function() {

            this.placeHolderAttrs = {
                "style":    "height: "+this.defaultAttrs.iframeHeight+"px; width:"+this.defaultAttrs.iframeWidth+"px",
                "src":      '/static/js/pepper/vodori/tinymce/iframe/img/iframeFPO.gif',
                "class":    "mceItem"
            };

            this.inherited(arguments);
        },

        /**
         * @param {tinymce.create.Editor} ed
         * @param {Element} node
         * @return {Array.<Element>}
         */
        _x_flipToEditor: function (ed, node) {
            var wrappers = this.inherited(arguments);
            var dom = ed.dom;
            tinymce.each(wrappers, function (wrapper) {
                this._resizeFPO(wrapper);
            }, this);

            return wrappers;
        },

        /**
         * @param {tinymce.create.Editor} ed
         * @param {Element} node
         * @return {Array.<Element>}
         */
        flipToPreview: function (ed, node) {
            var wrappers = this.inherited(arguments);
            tinymce.each(wrappers, function (wrapper) {
                var props = propsToObject(dojo.attr(wrapper, 'data-dojo-props'));
                wrapper.style.height = props.iframeHeight+'px';
                wrapper.style.width  = props.iframeWidth+'px';
                wrapper.src          = props.iframeSrc;
                console.log(wrapper);
            });

            return wrappers;
        },

        /**
         * @param {tinymce.create.Editor} ed
         * @param {tinymce.ControlManager} cm
         * @param {Element} n
         * @return {void}
         */
        handleNodeChange: function(ed, cm, n) {
            var inWidget = !!this.getWrapperOf(n);
            var dom      = ed.dom
            if(inWidget) {
                dom.addClass(n,'iframeSelected');
            }
            else{
                dom.removeClass(dom.select('.iframeSelected'),'iframeSelected');
            }

            //console.log(n,inWidget);
        },

        filterAttrs: function(attrs) {
            /*
             * Remove any non-digits
             */
            attrs.iframeHeight = attrs.iframeHeight.replace(/[^\d.]/g, "");
            attrs.iframeWidth = attrs.iframeWidth.replace(/[^\d.]/g, "");

            return attrs;
        },

        postUpdateWrapper: function(wrapper) {
            this._resizeFPO(wrapper);

        },

        _resizeFPO: function(fpo) {
            var props = propsToObject(dojo.attr(fpo, 'data-dojo-props'));
            fpo.style.height = props.iframeHeight+'px';
            fpo.style.width  = props.iframeWidth+'px';
        }

    });

    tinymce.PluginManager.add(pluginName, plugin);

    return plugin;
});
import AddToCardPlugin from 'src/plugin/add-to-cart/add-to-cart.plugin'
import DomAccess from 'src/helper/dom-access.helper'
import HttpClient from 'src/service/http-client.service'

export default class AddToCardPluginPlugin extends AddToCardPlugin {
    init() {
            this.PluginManger = window.PluginManager
            this._cartEl = DomAccess.querySelector(document, '.header-cart')
            this._client = new HttpClient(window.accessKey, window.contextToken)
            super.init()
    }

    _openOffCanvasCart(instance, requestUrl, formData) {
       this._client.post(requestUrl, formData, this._afterAddItemToCart.bind(this))
    }

    _afterAddItemToCart() {
        this._refreshCartValue()
        console.info('sasd')
    }

    _refreshCartValue() {
        const cartWidgetEl = DomAccess.querySelector(this._cartEl, '[data-cart-widget]')
        const cartWidgetInstance = PluginManager.getPluginInstanceFromElement(cartWidgetEl, 'CartWidget')
        cartWidgetInstance.fetch()
    }

}


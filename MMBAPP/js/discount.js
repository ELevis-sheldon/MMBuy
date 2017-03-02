/*
 * @Author: Elevis Ji
 * @Date:   2016-03-24 22:14:54
 * @Last Modified by:    pride
 * @Last Modified time: 2016-03-26 15:17:32
 */

'use strict';
$(function() {
    setProductList($('.discount-product'), $.getUrlParam('productid'))

    function setProductList(dom, productid, callback) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getdiscountproduct",
            data: { 'productid': productid },
            success: function(data) {
                var html = template("discountProduct", data);
                dom.html(html);
            }
        })
    }
});
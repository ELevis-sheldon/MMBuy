/*
 * @Author: Elevis Ji
 * @Date:   2016-03-24 22:14:54
 * @Last Modified by:   pride
 * @Last Modified time: 2016-03-25 18:36:27
 */

'use strict';
$(function() {
    setProductList($('.money-product'), $.getUrlParam('productid'))

    function setProductList(dom, productid, callback) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getmoneyctrlproduct",
            data: { 'productid': productid },
            success: function(data) {
                var html = template("moneyProduct", data);
                dom.html(html);
            }
        })
    }
});
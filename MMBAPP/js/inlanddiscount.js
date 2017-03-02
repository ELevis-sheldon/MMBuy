/*
 * @Author: Elevis Ji
 * @Date:   2016-03-24 22:14:54
 * @Last Modified by:   pride
 * @Last Modified time: 2016-03-29 11:53:14
 */

'use strict';
$(function() {
    setProductList($('.inland-discount-list'))

    function setProductList(dom, callback) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getinlanddiscount",
            success: function(data) {
                var html = template("productList", data);
                dom.html(html);
                $('.loading').hide();
            }
        })
    }
});
/*
 * @Author: Elevis Ji
 * @Date:   2016-03-25 20:52:09
 * @Last Modified by:   pride
 * @Last Modified time: 2016-03-27 16:58:01
 */

'use strict';
$(function() {
    setCoupon($('.coupon-title'))

    function setCoupon(dom, callback) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getcoupon",
            success: function(data) {
                var html = template('couponTitle', data);
                dom.html(html);
            }
        })
    }
});
﻿
/// <reference path="../angularjs/angular.d.ts" />


/**
 * This module is used to house custom interfaces that aren't data types.
 */
declare module JustinCredible.SmartHomeMobile.Interfaces {

    /**
     * An extension of the Angular IRequestConfig interface which allows us to pass along a
     * few extra flags to control some featuers as defined in our HttpInterceptor.
     */
    interface IRequestConfig extends ng.IRequestConfig {

        /**
         * Indicates that the user should be blocked during this request.
         * HttpInterceptor defaults this to true.
         */
        blocking?: boolean;

        /**
         * If blocking is true, specifies the text to use in the blocking dialog.
         * HttpIntercetpor defaults this to empty string.
         */
        blockingText?: string;

        /**
         * Indicates that the non-blocking activity spinner should be shown during this request.
         * HttpInterceptor defaults this to true.
         */
        showSpinner?: boolean;
    }
}
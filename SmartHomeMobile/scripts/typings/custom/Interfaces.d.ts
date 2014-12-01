﻿/**
 * This module is used to house custom interfaces.
 */
declare module JustinCredible.SmartHomeMobile.Interfaces {

    /**
     * An extension of the Angular RequestConfig interface which allows us to pass along a
     * few extra flags to control some featuers as defined in our HttpInterceptor.
     */
    interface RequestConfig extends ng.IRequestConfig {

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

    /**
     * Describes the application's build and version details.
     */
    interface VersionInfo {
        majorVersion: number;
        minorVersion: number;
        releaseVersion: number;
        revisionVersion: number;
        versionString: string;
        buildTimestamp: string;
        applicationName: string;
        websiteUrl: string;
        githubUrl: string;
        email: string;
    }
}
﻿/**
 * This module is used to house interfaces describing server-side data types
 * that are used on the client-side (eg as parameters or responses to/from
 * AJAX calls).
 */
declare module JustinCredible.SmartHomeMobile.DataTypes {

    //#region User Interface Types

    //TODO move to a model object instead
    interface IVersionInfo {
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

    //#endregion

}
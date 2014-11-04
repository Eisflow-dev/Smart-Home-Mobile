﻿module JustinCredible.SmartHomeMobile.Controllers {

    /**
     * This is the base controller that all other controllers should utilize.
     * 
     * It handles saving a reference to the Angular scope, newing up the given
     * model object type, and injecting the view model and controller onto the
     * scope object for use in views.
     * 
     * T - The parameter type for the model.
     */
    export class BaseController<T> {
        public scope: ng.IScope;
        public viewModel: T;

        constructor(scope: ng.IScope, ModelType) {
            // Save a reference to Angular's scope object.
            this.scope = scope;

            // Create the view model.
            this.viewModel = new ModelType();

            /*tslint:disable no-string-literals*/

            // Push the view model onto the scope so it can be
            // referenced from the template/views.
            this.scope["viewModel"] = this.viewModel;

            // Push the controller onto the scope so it can be
            // used to reference events for controls etc.
            this.scope["controller"] = this;

            /*tslint:enable no-string-literals*/

            // Subscribe to the destroy event so we can perform clean-up etc.
            this.scope.$on("$destroy", _.bind(this.destroy, this));

            // Now that everything else is done, we can initialize.
            // We defer here so that the initialize event occurs after the constructor
            // of the child class has had a chance to execute.
            _.defer(() => {
                this.initialize();
                this.scope.$apply();
            });
        }

        /**
         * Fired after the constructor has completed. Used to setup the controller.
         * 
         * Can be overridden by implementing controllers.
         */
        public initialize() {
            // No logic should be placed here, since TypeScript doesn't currently support
            // protected members, so descendants may not be delegating to super.initialize().
        }

        /**
         * Fired when this controller is destroyed. Can be used for clean-up etc.
         * 
         * Can be overridden by implementing controllers.
         */
        public destroy() {
            // No logic should be placed here, since TypeScript doesn't currently support
            // protected members, so descendants may not be delegating to super.initialize().
        }
    }
}
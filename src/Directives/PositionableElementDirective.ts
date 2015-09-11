module JustinCredible.SmartHomeMobile.Directives {

    export interface PositionableElementScope extends ng.IScope {
        left: number;
        top: number;
    }

    /**
     * A directive for adding drag and drop capability to an element.
     * 
     * This was modified from the Angular directive sample:
     * https://docs.angularjs.org/guide/directive
     */
    export class PositionableElementDirective implements ng.IDirective {

        //#region Injection

        public static ID = "positionableElement";

        public static get $inject(): string[] {
            return ["$document"];
        }

        constructor(
            private $document: ng.IDocumentService) {

            // Ensure that the link function is bound to this instance so we can
            // access instance variables like $parse. AngularJs normally executes
            // the link function in the context of the global scope.
            this.link = _.bind(this.link, this);
        }

        //#endregion

        public restrict = "A";

        public scope = {
            left: "=left",
            top: "=top"
        };

        public link(scope: PositionableElementScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes, controller: any, transclude: ng.ITranscludeFunction): void {

            var startX = 0, startY = 0, x = 0, y = 0;

            // Watch the properties so we can update the element if they change.

            scope.$watch(() => { return scope.left; }, () => {
                element.css({
                    left: scope.left + "px"
                });
            });

            scope.$watch(() => { return scope.top; }, () => {
                element.css({
                    top: scope.top + "px"
                });
            });

            // Setup the element"s initial styling.
            element.css({
                position: "relative",
                border: "1px solid red",
                backgroundColor: "lightgrey",
                cursor: "pointer",
                left: scope.left + "px",
                top: scope.top + "px"
            });

            // When the mouse moves, update the element position.
            var mousemove = (event) => {
                y = event.pageY - startY;
                x = event.pageX - startX;

                element.css({
                    top: y + "px",
                    left:  x + "px"
                });
            };

            // Once the mouse button is released, unwire the events and update the scope values.
            var mouseup = () => {
                this.$document.off("mousemove", mousemove);
                this.$document.off("mouseup", mouseup);

                scope.top = y;
                scope.left = x;
                scope.$apply();
            };

            // When the mouse is pressed we wire up the move events.
            element.on("mousedown", (event) => {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;

                this.$document.on("mousemove", mousemove);
                this.$document.on("mouseup", mouseup);
            });
        }
    }
}

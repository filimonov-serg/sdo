"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var courses_component_1 = require('./courses/courses.component');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'courses', component: courses_component_1.CoursesComponent },
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
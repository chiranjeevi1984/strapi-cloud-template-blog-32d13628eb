'use strict';

/**
 * lect-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lect-note.lect-note');

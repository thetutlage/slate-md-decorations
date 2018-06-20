/*
* slate-decorations
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

const getRange = require('../getRange')

/**
 * Adds strke decoration
 *
 * @method strike
 *
 * @param  {Object}    node
 * @param  {Array}     textBlocks
 * @param  {Array}     decorations
 * @param  {Function}  reparse
 *
 * @return {void}
 */
module.exports = function strike (node, textBlocks, decorations, reparse) {
  decorations.push(getRange(textBlocks, node, {
    start: node.position.start.offset,
    end: node.position.end.offset,
    marks: [{ type: 'strike' }]
  }))

  node.children.forEach((child) => {
    reparse(child, textBlocks, decorations)
  })
}

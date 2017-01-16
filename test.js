import test from 'ava'
import isVoidElement from './'

test('is-void-element returns true when void', t => t.truthy(isVoidElement('img')))
test('is-void-element returns false when not void', t => t.falsy(isVoidElement('div')))

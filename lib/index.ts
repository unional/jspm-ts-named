import _ from 'lodash';

export function map() {
	return _.map.apply(_, arguments);
}
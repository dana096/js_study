function append(value, array = []) {
        array.push(value);
	return array;
}
append(1);
append(2);
append(1, append(2));

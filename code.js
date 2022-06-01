<script>
// JavaScript code to find Two elements
// whose sum is closest to zero

function minAbsSumPair( arr, arr_size)
{
	var inv_count = 0;
	var l, r, min_sum, sum, min_l, min_r;
	
	
	/* Initialization of values */
	min_l = 0;
	min_r = 1;
	min_sum = arr[0] + arr[1];
	
	for(l = 0; l < arr_size - 1; l++)
	{
		for(r = l + 1; r < arr_size; r++)
		{
			sum = arr[l] + arr[r];
			if(Math.abs(min_sum) > Math.abs(sum))
		{
			min_sum = sum;
			min_l = l;
			min_r = r;
		}
	}
	}
	
	document.write("The two elements whose sum is minimum are "
			+ arr[min_l] + " and " + arr[min_r]);
}

// Driver Code
	arr = new Array(1, 60, -10, 70, -80, 85);
	minAbsSumPair(arr, 6);
	
	// This code is contributed by simranarora5sos
</script>

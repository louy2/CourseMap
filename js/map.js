//Map structure for storing the number of courses in each level of each department
var Map = function() 
{
    //Creates the structure
	this.keys = new Array();
    this.data = new Array();

    //Puts in the department as a key with an array as its value
	this.put = function (key) 
	{
        if (this.data[key] == null) 
		{
            this.keys.push(key);
			this.data[key] = new Array(9);
        }
		
		return;
    };
				
	// Returns the value associated to the key 
    this.get = function (key) 
	{
        return this.data[key];
    };
	
	// Increments the value corresponding to the value given, (e.g. MATH-2400 will increment the MATH key's 2nd array value by 1)
	this.increment = function (key,val)
	{
		if (this.data[key] != null)
		{
			if (this.val < 2000 || this.val == 10)
			{
			this.data[key][0] = this.data[key][0] + 1;
			}
			else if (this.val < 3000)
			{
				this.data[key][1] = this.data[key][1] + 1;
			}
			else if (this.val < 4000 || this.val == 30)
			{
				this.data[key][2] = this.data[key][2] +1;
			}
			else if (this.val < 5000)
			{
				this.data[key][3] = this.data[key][3] + 1;
			}
			else if (this.val < 6000 || this.val == 50)
			{
				this.data[key][4] = this.data[key][4] +1;
			}
			else if (this.val < 7000)
			{
				this.data[key][5] = this.data[key][5] +1;
			}
			else if (this.val < 8000 || this.val == 70)
			{
				this.data[key][6] = this.data[key][6] +1;
			}
			else
			{
				this.data[key][7] = this.data[key][7] +1;
			}
		}
		
		return;
	};
}
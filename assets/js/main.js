
function SelectionSort() {

    var arr = document.getElementById('inputArr').value.split(',');
    document.getElementsByTagName('code')[0].innerText = ''
    // main logic starts from here
    var min = 0;
    for (var i = 0; i < arr.length; i++)
    {
        min = i;
        for (var j = i; j < arr.length; j++)
        {
            if (parseInt(arr[min]) > parseInt(arr[j]))
                min = j;
        }
        if (min != i)
        {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            document.getElementsByTagName('code')[0].innerText += arr + '\n';
        }
        
    }
            
    //document.getElementById('inputArr').value = arr.join(',');
    //console.log(arr)
}

function BubbleSort() {

    var arr = document.getElementById('inputArr').value.split(',');
    document.getElementsByTagName('code')[0].innerText = ''

    // main logic starts from here
    for (var i = 0; i < arr.length; i++) {

        for (var j = i; j < arr.length; j++) {
            if (parseInt(arr[j]) >parseInt( arr[j + 1]))
            {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                document.getElementsByTagName('code')[0].innerText += arr + '\n';
            }
        }        
    }

    //document.getElementById('inputArr').value = arr.join(',');
    //console.log(arr)
}

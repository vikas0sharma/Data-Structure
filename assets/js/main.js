
function SelectionSort() {

    var arr = document.getElementById('inputArr').value.split(',');
    document.getElementsByTagName('pre')[0].innerText = ''
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
            document.getElementsByTagName('pre')[0].innerText += arr + '\n';
        }
        
    }
}

function BubbleSort() {

    var arr = document.getElementById('inputArr').value.split(',');
    document.getElementsByTagName('pre')[0].innerText = ''

    // main logic starts from here
    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr.length; j++) {

            if (parseInt(arr[j]) > parseInt( arr[j + 1]))
            {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                document.getElementsByTagName('pre')[0].innerText += arr + '\n';
            }
        }        
    }
}


function InsertionSort() {

    var arr = document.getElementById('inputArr').value.split(',');
    document.getElementsByTagName('pre')[0].innerText = ''

    // main logic starts from here
    for (var i = 0; i < arr.length; i++) {

        var pointer = parseInt(arr[i]);
        var j=i-1;

        while(j>=0 && parseInt(arr[j]) > pointer){
            arr[j+1]=arr[j];
            j=j-1;
            
        }
        arr[j+1]=pointer;
        document.getElementsByTagName('pre')[0].innerText += arr + '\n';
                
    }
}

function MergeSort() {

    var arr = document.getElementById('inputArr').value.split(',');
    document.getElementsByTagName('pre')[0].innerText = ''

   

    var sort=function(array) {
        var nLength=array.length;
        
        if(nLength==1)
            return array;

        var arrL=[],arrR=[];
        arrL=array.slice(0,nLength/2);
        arrR=array.slice(nLength/2,nLength);
        
        arrL=sort(arrL);
        arrR=sort(arrR);
        return merge(arrL,arrR);
        
    }

    var merge = function(arrL,arrR){
        var mergedArr=[],k=0;
        while(arrL.length>0 && arrR.length>0)
        {
            if(arrL[0]>arrR[0])
            {
                mergedArr[k]=arrR[0];
                arrR.splice(0,1);

            }
            else
            {
                mergedArr[k]=arrL[0];
                arrL.splice(0,1);
            }
            k++;
        }
        while(arrL.length>0)
        {
            mergedArr[k]=arrL[0];
            arrL.splice(0,1);
            k++;

        }
        while(arrR.length>0)
        {
            mergedArr[k]=arrR[0];
            arrR.splice(0,1);
            k++;

        }
        document.getElementsByTagName('pre')[0].innerText += mergedArr + '\n';
        return mergedArr;
    }


     sort(arr);
    
}

function QuickSort(){

    var partition=function(array,nLow,nHigh){
        
        var pivot=parseInt(array[nLow]), i=nLow,j=nHigh,temp;

        while(true)
        {
            while(array[i] < pivot && parseInt(array[i]) !=pivot)
            {
                i++;
            }
            while(array[j] > pivot && parseInt(array[j])!=pivot)
            {
                j--;
            }

            if(i<j)
            {
                temp=array[i];
                array[i]=array[j];
                array[j]=temp;

            }
            else
            {
                return j;
            }
            document.getElementsByTagName('pre')[0].innerText += array + '\n';
        }
    }

    var sort=function(array,nLow,nHigh){
        if(nLow<nHigh)
        {
            var pi=partition(array,nLow,nHigh)
            sort(array,nLow,pi);
            sort(array,pi+1,nHigh);
        }

    }

    var arr = document.getElementById('inputArr').value.split(',');
    document.getElementsByTagName('pre')[0].innerText = '';
    sort(arr,0,arr.length-1);
   
}


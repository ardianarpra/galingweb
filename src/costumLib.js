export function formatUang(uang){

    var formatter = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      currency: 'IDR',
    });
  
    return formatter.format(uang);
  }

  export function DateFormat(tgl, dateOnly=true, delimiter="-", dbDate = false){
      if(dbDate){
          if(dateOnly)
              return tgl.getFullYear()+delimiter+("0" + (tgl.getMonth()+1)).slice(-2)+delimiter+("0" + tgl.getDate()).slice(-2)
          else 
              var tgl_asli = new Date();
              return tgl.getFullYear()+delimiter+("0" + (tgl.getMonth()+1)).slice(-2)+delimiter+("0" + tgl.getDate()).slice(-2)+" "+("0"+tgl_asli.getHours()).slice(-2)+":"+("0"+tgl_asli.getMinutes()).slice(-2)+":"+("0"+tgl_asli.getSeconds()).slice(-2)
      }
      else {
          if(dateOnly)
              return ("0" + tgl.getDate()).slice(-2)+delimiter+("0" + (tgl.getMonth()+1)).slice(-2)+delimiter+tgl.getFullYear()
          else 
              return ("0" + tgl.getDate()).slice(-2)+delimiter+("0" + (tgl.getMonth()+1)).slice(-2)+delimiter+tgl.getFullYear()+" "+("0"+tgl.getHours()).slice(-2)+":"+("0"+tgl.getMinutes()).slice(-2)+":"+("0"+tgl.getSeconds()).slice(-2)
      }
  }
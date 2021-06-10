class Result
{
    constructor(parrayperson)
    {
        this.arrayperson=parrayperson;
    }
    number_people=()=>
    {
      return this.arrayperson.length;
    }
    calc_survey=()=>
  { 
    let primary=0,secondary=0,technical_career=0,professional=0,postgraduate=0;
    let avgpri=0,avgsec=0,avgtech=0,avgprof=0,avgpost=0;
    let numberpeople=this.number_people();
      this.arrayperson.map(
          p=>{
            let study=p.study;
          if(study==="Primary")
          {
            primary=primary+1;
          }
          else
          {
            if(study==="Secondary")
            {
              secondary=secondary+1;
            }
            else
            {
              if(study==="Technical Career")
              {
                technical_career=technical_career+1;
              }
              else
              {
                if(study==="Professional")
                {
                  professional=professional+1;
                }
                else if(study==="Postgraduate")
                {
                  postgraduate=postgraduate+1;
                }
              
              }
            }
          }
          }
      )
    avgpri=(primary/numberpeople)*100;
    avgsec=(secondary/numberpeople)*100;
    avgtech=(technical_career/numberpeople)*100;
    avgprof=(professional/numberpeople)*100;
    avgpost=(postgraduate/numberpeople)*100;

    return {avgpri,avgsec,avgtech,avgprof,avgpost}
     }
}
module.exports={Result}
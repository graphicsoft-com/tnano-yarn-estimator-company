const a0_0x3a084f=a0_0x1a4a;(function(_0x5123f2,_0x211fad){const _0xcdd4cb=a0_0x1a4a,_0xac507b=_0x5123f2();while(!![]){try{const _0x3f96fb=parseInt(_0xcdd4cb(0x209))/0x1*(parseInt(_0xcdd4cb(0x1f8))/0x2)+-parseInt(_0xcdd4cb(0x227))/0x3*(-parseInt(_0xcdd4cb(0x204))/0x4)+-parseInt(_0xcdd4cb(0x215))/0x5*(parseInt(_0xcdd4cb(0x1e5))/0x6)+parseInt(_0xcdd4cb(0x1ba))/0x7+-parseInt(_0xcdd4cb(0x214))/0x8+-parseInt(_0xcdd4cb(0x1c9))/0x9*(parseInt(_0xcdd4cb(0x1d4))/0xa)+parseInt(_0xcdd4cb(0x225))/0xb;if(_0x3f96fb===_0x211fad)break;else _0xac507b['push'](_0xac507b['shift']());}catch(_0x148985){_0xac507b['push'](_0xac507b['shift']());}}}(a0_0x25f9,0xb5922));class Equipment{constructor(_0x1c70a8,_0xe87936,_0x44a363,_0x200d54,_0x5c7b62){const _0x209053=a0_0x1a4a;this['type']=_0x1c70a8,this[_0x209053(0x21c)]=_0xe87936,this[_0x209053(0x20e)]=_0x44a363,this[_0x209053(0x1ad)]=_0x200d54,this[_0x209053(0x208)]=_0x5c7b62;}}class Material{constructor(_0x5ead1c,_0xb2bbf9){const _0x203951=a0_0x1a4a;this[_0x203951(0x211)]=_0x5ead1c,this[_0x203951(0x1aa)]=_0xb2bbf9;}}class WorkerTask{constructor(_0x330a0f,_0xf4d781){const _0x104b68=a0_0x1a4a;this[_0x104b68(0x1e0)]=_0x330a0f,this[_0x104b68(0x1cf)]=_0xf4d781;}}class IndirectCost{constructor(_0x740dc0,_0x204779){const _0x29aecc=a0_0x1a4a;this[_0x29aecc(0x211)]=_0x740dc0,this[_0x29aecc(0x1f0)]=_0x204779;}}const speakersPerWafer=0xf3,equipment=[];equipment[0x0]=new Equipment(a0_0x3a084f(0x1b7),a0_0x3a084f(0x1c6),0x2d2a8,0.75,0x1),equipment[0x1]=new Equipment(a0_0x3a084f(0x1b7),a0_0x3a084f(0x1ac),0x3d090,0x20,0x1),equipment[0x2]=new Equipment(a0_0x3a084f(0x1b7),a0_0x3a084f(0x1c3),0xc3500,0xc8,0x1),equipment[0x3]=new Equipment(a0_0x3a084f(0x1f5),'CHA\x20Mark\x2050',0x222e0,0x6,0x1);const Materials=[];Materials[0x0]=new Material('Silicon\x20Wafers',0xc8/0x5/speakersPerWafer),Materials[0x1]=new Material(a0_0x3a084f(0x1e6),6.7/0x5/speakersPerWafer),Materials[0x2]=new Material('Acetylene\x20Gas',4.41/0x5/speakersPerWafer),Materials[0x3]=new Material(a0_0x3a084f(0x207),3.5154/0x5/speakersPerWafer),Materials[0x4]=new Material(a0_0x3a084f(0x1c7),5.7246/0x5/speakersPerWafer),Materials[0x5]=new Material('Amplifier\x20Components',0xc3),Materials[0x6]=new Material('Frame\x20Components',0x28),Materials[0x7]=new Material(a0_0x3a084f(0x1ce),0x3e8);const workerTasks=[];workerTasks[0x0]=new WorkerTask(a0_0x3a084f(0x1ae),0x1/0x10/speakersPerWafer),workerTasks[0x1]=new WorkerTask(a0_0x3a084f(0x1e3),0x1/speakersPerWafer),workerTasks[0x2]=new WorkerTask(a0_0x3a084f(0x20a),0xf/0x3c),workerTasks[0x3]=new WorkerTask(a0_0x3a084f(0x1be),0x2),workerTasks[0x4]=new WorkerTask(a0_0x3a084f(0x216),0x6),workerTasks[0x5]=new WorkerTask('Final\x20assembly',0x2),workerTasks[0x6]=new WorkerTask(a0_0x3a084f(0x1e2),0x1);const indirectCosts=[];indirectCosts[0x0]=new IndirectCost('Rent',0xfa0),indirectCosts[0x1]=new IndirectCost(a0_0x3a084f(0x213),0x78);let speakersPerMonth=0xa,months=0x0,markup=0x0,wafersPerMonth=0x0,countOfEquipment=[0x0,0x0,0x0,0x0],hourlySalaryEngineer=62.5,timeCostLineChart=null,costPieChart=null,resultsBarChart=null;RunCalculator();function a0_0x1a4a(_0x292626,_0x35dc18){const _0x25f9de=a0_0x25f9();return a0_0x1a4a=function(_0x1a4a57,_0x242fcf){_0x1a4a57=_0x1a4a57-0x1aa;let _0x24eae1=_0x25f9de[_0x1a4a57];return _0x24eae1;},a0_0x1a4a(_0x292626,_0x35dc18);}function CompareEquipment(_0xd6da09,_0x22a48a){const _0x474b0a=a0_0x3a084f;if(_0xd6da09[_0x474b0a(0x1ad)]<_0x22a48a[_0x474b0a(0x1ad)])return 0x1;else return-0x1;}function GetEquipmentOfType(_0xa1554e){const _0x1dce74=a0_0x3a084f;let _0x332872=0x0;equipment[_0x1dce74(0x1e7)](_0x3ddd02=>{const _0x2f6b80=_0x1dce74;if(_0x3ddd02[_0x2f6b80(0x211)]===_0xa1554e)_0x332872++;});let _0x5802fd=new Array(_0x332872),_0x5662a5=0x0;return equipment['forEach'](_0x480968=>{const _0x3ed01f=_0x1dce74;_0x480968[_0x3ed01f(0x211)]===_0xa1554e&&(_0x5802fd[_0x5662a5]=_0x480968,_0x5662a5++);}),_0x5802fd[_0x1dce74(0x20b)](CompareEquipment),_0x5802fd;}function RunCalculator(){const _0xaa698f=a0_0x3a084f;speakersPerMonth=document['getElementById'](_0xaa698f(0x1d8))[_0xaa698f(0x1bb)],months=document[_0xaa698f(0x1fa)](_0xaa698f(0x1f4))[_0xaa698f(0x1bb)],markup=document[_0xaa698f(0x1fa)](_0xaa698f(0x1b2))['value'],wafersPerMonth=speakersPerMonth/speakersPerWafer;let _0x34cd03=0x0;countOfEquipment=[0x0,0x0,0x0,0x0];let _0x36a1b7=0x0,_0x490b9e=0x0;if(document[_0xaa698f(0x1fa)](_0xaa698f(0x1fe))[_0xaa698f(0x1bb)]==0x0){let _0x18f3cf=[_0xaa698f(0x1f5),'CVD'];_0x18f3cf[_0xaa698f(0x1e7)](_0x3c88e0=>{const _0x44b12f=_0xaa698f;let _0x393ac4=GetEquipmentOfType(_0x3c88e0),_0xd9ced2=wafersPerMonth/0xa0;for(let _0x25d203=0x0;_0x25d203<_0x393ac4[_0x44b12f(0x1dc)];_0x25d203++){while(_0xd9ced2>_0x393ac4[_0x25d203]['maxThroughput']){countOfEquipment[equipment[_0x44b12f(0x1b5)](_0x393ac4[_0x25d203])]++,_0xd9ced2-=_0x393ac4[_0x25d203][_0x44b12f(0x1ad)];}if(_0x25d203<_0x393ac4[_0x44b12f(0x1dc)]-0x1){let _0x5c116d=Math[_0x44b12f(0x21e)](_0xd9ced2/_0x393ac4[_0x25d203+0x1]['maxThroughput']);_0x393ac4[_0x25d203][_0x44b12f(0x20e)]<_0x393ac4[_0x25d203+0x1]['cost']*_0x5c116d&&(countOfEquipment[equipment[_0x44b12f(0x1b5)](_0x393ac4[_0x25d203])]++,_0xd9ced2-=_0x393ac4[_0x25d203][_0x44b12f(0x1ad)]);}}let _0x45e026=equipment[_0x44b12f(0x1b5)](GetEquipmentOfType(_0x3c88e0)[GetEquipmentOfType(_0x3c88e0)[_0x44b12f(0x1dc)]-0x1]);while(_0xd9ced2>0x0){countOfEquipment[_0x45e026]++,_0xd9ced2-=equipment[_0x45e026][_0x44b12f(0x1ad)];}});for(let _0x410c0c=0x0;_0x410c0c<equipment['length'];_0x410c0c++){_0x34cd03+=equipment[_0x410c0c]['cost']*Math[_0xaa698f(0x1bf)](countOfEquipment[_0x410c0c],equipment[_0x410c0c][_0xaa698f(0x208)]);}for(let _0xb7951a=0x0;_0xb7951a<Materials[_0xaa698f(0x1dc)]-0x1;_0xb7951a++){_0x36a1b7+=Materials[_0xb7951a][_0xaa698f(0x1aa)]*speakersPerMonth*months;}for(let _0x2a46c8=0x0;_0x2a46c8<workerTasks[_0xaa698f(0x1dc)];_0x2a46c8++){_0x490b9e+=workerTasks[_0x2a46c8][_0xaa698f(0x1cf)]*speakersPerMonth*months*hourlySalaryEngineer;}}else{for(let _0x5174c9=0x5;_0x5174c9<Materials['length'];_0x5174c9++){_0x36a1b7+=Materials[_0x5174c9][_0xaa698f(0x1aa)]*speakersPerMonth*months;}for(let _0x152fda=0x2;_0x152fda<workerTasks[_0xaa698f(0x1dc)];_0x152fda++){_0x490b9e+=workerTasks[_0x152fda][_0xaa698f(0x1cf)]*speakersPerMonth*months*hourlySalaryEngineer;}}let _0x103129=0x0;indirectCosts[_0xaa698f(0x1e7)](_0x2e7e13=>{_0x103129+=_0x2e7e13['monthlyCost']*months;});let _0x172576=_0x490b9e+_0x103129+_0x36a1b7+_0x34cd03,_0x248565=_0x172576/months,_0x45a637=_0x172576*(0x1+markup/0x64),_0x9876cf=_0x45a637-_0x172576,_0x4cc1d8=_0x45a637/months/speakersPerMonth;ConsoleLogValues(wafersPerMonth,_0x4cc1d8,_0x45a637,_0x34cd03,_0x36a1b7,_0x490b9e,_0x103129,_0x9876cf),DrawCostPieChart(_0x34cd03,_0x490b9e,_0x36a1b7,_0x103129);let _0x37d184=_0x248565*(0x1+markup/0x64);DrawResultsBarChart(Math['round'](_0x34cd03),Math[_0xaa698f(0x21e)](_0x490b9e/months),Math['round'](_0x36a1b7/months),Math['round'](_0x103129/months),Math[_0xaa698f(0x21e)](_0x37d184)),DrawText(_0x4cc1d8,_0x45a637,_0x34cd03,_0x36a1b7,_0x490b9e,_0x103129,_0x9876cf),CloseAllDetails(),DrawTimePriceLineChart();}function CloseAllDetails(){const _0x2b23db=a0_0x3a084f;let _0x453f0c=document[_0x2b23db(0x1fa)](_0x2b23db(0x206));if(_0x453f0c[_0x2b23db(0x1d7)]()){while(_0x453f0c[_0x2b23db(0x1fb)]){_0x453f0c[_0x2b23db(0x1b0)](_0x453f0c[_0x2b23db(0x1fb)]);}_0x453f0c[_0x2b23db(0x1b3)][_0x2b23db(0x1e9)]=_0x2b23db(0x1ab);}let _0xde553d=document[_0x2b23db(0x1fa)]('materialsDetailHolder');if(_0xde553d['hasChildNodes']()){while(_0xde553d['firstChild']){_0xde553d['removeChild'](_0xde553d[_0x2b23db(0x1fb)]);}_0xde553d[_0x2b23db(0x1b3)][_0x2b23db(0x1e9)]='none';}let _0x32929e=document[_0x2b23db(0x1fa)]('laborDetailHolder');if(_0x32929e[_0x2b23db(0x1d7)]()){while(_0x32929e['firstChild']){_0x32929e[_0x2b23db(0x1b0)](_0x32929e[_0x2b23db(0x1fb)]);}_0x32929e[_0x2b23db(0x1b3)][_0x2b23db(0x1e9)]=_0x2b23db(0x1ab);}let _0x17b082=document['getElementById'](_0x2b23db(0x1f9));if(_0x17b082[_0x2b23db(0x1d7)]()){while(_0x17b082[_0x2b23db(0x1fb)]){_0x17b082[_0x2b23db(0x1b0)](_0x17b082[_0x2b23db(0x1fb)]);}_0x17b082[_0x2b23db(0x1b3)][_0x2b23db(0x1e9)]=_0x2b23db(0x1ab);}}function ToggleEquipmentDetails(){const _0x3f00a9=a0_0x3a084f;let _0x4164d0=document[_0x3f00a9(0x1fa)](_0x3f00a9(0x206));if(_0x4164d0[_0x3f00a9(0x1d7)]()){while(_0x4164d0[_0x3f00a9(0x1fb)]){_0x4164d0[_0x3f00a9(0x1b0)](_0x4164d0[_0x3f00a9(0x1fb)]);}_0x4164d0[_0x3f00a9(0x1b3)][_0x3f00a9(0x1e9)]=_0x3f00a9(0x1ab);}else{_0x4164d0[_0x3f00a9(0x1b3)]['display']=_0x3f00a9(0x1fc);if(document[_0x3f00a9(0x1fa)](_0x3f00a9(0x1fe))[_0x3f00a9(0x1bb)]==0x0)for(let _0x14607e=0x0;_0x14607e<equipment[_0x3f00a9(0x1dc)];_0x14607e++){if(countOfEquipment[_0x14607e]!==0x0){let _0x3a2891=document['createElement']('p'),_0x45b183=document[_0x3f00a9(0x1c1)]('p');_0x3a2891['textContent']=countOfEquipment[_0x14607e]+'x\x20'+equipment[_0x14607e][_0x3f00a9(0x211)]+':\x20'+equipment[_0x14607e]['name'],_0x45b183['textContent']=new Intl[(_0x3f00a9(0x1c0))]('en-US',{'style':_0x3f00a9(0x1ca),'currency':_0x3f00a9(0x1fd),'minimumFractionDigits':0x0})[_0x3f00a9(0x22a)](Math['round'](equipment[_0x14607e]['cost']*countOfEquipment[_0x14607e]*PerUnitFactor('totalCostUnit'))),_0x3a2891[_0x3f00a9(0x1b3)][_0x3f00a9(0x1f2)]=0x1,_0x45b183['style']['flexGrow']=0x1,_0x45b183[_0x3f00a9(0x1b3)][_0x3f00a9(0x1d2)]=_0x3f00a9(0x1df),_0x45b183[_0x3f00a9(0x1b3)]['textAlign']=_0x3f00a9(0x1af),_0x4164d0[_0x3f00a9(0x1eb)](_0x3a2891),_0x4164d0[_0x3f00a9(0x1eb)](_0x45b183);}}else{let _0x1f9d23=document['createElement']('p');_0x1f9d23[_0x3f00a9(0x1b4)]='-',_0x1f9d23[_0x3f00a9(0x1b3)][_0x3f00a9(0x1f2)]=0x1,_0x4164d0[_0x3f00a9(0x1eb)](_0x1f9d23);}}}function ToggleMaterialDetails(){const _0x2b068e=a0_0x3a084f;let _0x347b50=document['getElementById'](_0x2b068e(0x222));if(_0x347b50[_0x2b068e(0x1d7)]()){while(_0x347b50[_0x2b068e(0x1fb)]){_0x347b50[_0x2b068e(0x1b0)](_0x347b50[_0x2b068e(0x1fb)]);}_0x347b50[_0x2b068e(0x1b3)][_0x2b068e(0x1e9)]=_0x2b068e(0x1ab);}else{_0x347b50[_0x2b068e(0x1b3)]['display']=_0x2b068e(0x1fc);let _0x50c11d,_0x20a945;document[_0x2b068e(0x1fa)]('productionMode')[_0x2b068e(0x1bb)]==0x0?(_0x50c11d=0x0,_0x20a945=0x1):(_0x50c11d=0x5,_0x20a945=0x0);for(let _0x75f7c=_0x50c11d;_0x75f7c<Materials[_0x2b068e(0x1dc)]-_0x20a945;_0x75f7c++){let _0x803061=document[_0x2b068e(0x1c1)]('p'),_0xcebd4d=document[_0x2b068e(0x1c1)]('p');_0x803061[_0x2b068e(0x1b4)]=Materials[_0x75f7c][_0x2b068e(0x211)],_0xcebd4d[_0x2b068e(0x1b4)]=new Intl[(_0x2b068e(0x1c0))](_0x2b068e(0x1d0),{'style':_0x2b068e(0x1ca),'currency':_0x2b068e(0x1fd),'minimumFractionDigits':0x0})[_0x2b068e(0x22a)](Math[_0x2b068e(0x21e)](Materials[_0x75f7c][_0x2b068e(0x1aa)]*speakersPerMonth*months*PerUnitFactor('totalCostUnit')*0x64)/0x64),_0x803061[_0x2b068e(0x1b3)][_0x2b068e(0x1f2)]=0x1,_0x803061[_0x2b068e(0x1b3)]['minWidth']=_0x2b068e(0x221),_0xcebd4d[_0x2b068e(0x1b3)]['flexGrow']=0x1,_0xcebd4d['style'][_0x2b068e(0x1d2)]='40%',_0xcebd4d[_0x2b068e(0x1b3)][_0x2b068e(0x20d)]=_0x2b068e(0x1af),_0x347b50[_0x2b068e(0x1eb)](_0x803061),_0x347b50[_0x2b068e(0x1eb)](_0xcebd4d);}}}function ToggleLaborDetails(){const _0x3bb054=a0_0x3a084f;let _0x279f99=document['getElementById'](_0x3bb054(0x200));if(_0x279f99[_0x3bb054(0x1d7)]()){while(_0x279f99[_0x3bb054(0x1fb)]){_0x279f99[_0x3bb054(0x1b0)](_0x279f99[_0x3bb054(0x1fb)]);}_0x279f99[_0x3bb054(0x1b3)][_0x3bb054(0x1e9)]=_0x3bb054(0x1ab);}else{_0x279f99[_0x3bb054(0x1b3)][_0x3bb054(0x1e9)]=_0x3bb054(0x1fc);let _0x569e3e;document['getElementById']('productionMode')['value']==0x0?_0x569e3e=0x0:_0x569e3e=0x2;for(let _0x336990=_0x569e3e;_0x336990<workerTasks[_0x3bb054(0x1dc)];_0x336990++){let _0x4d381f=document[_0x3bb054(0x1c1)]('p'),_0x55b1af=document[_0x3bb054(0x1c1)]('p');_0x4d381f[_0x3bb054(0x1b4)]=workerTasks[_0x336990][_0x3bb054(0x1e0)],_0x55b1af[_0x3bb054(0x1b4)]=new Intl['NumberFormat'](_0x3bb054(0x1d0),{'style':_0x3bb054(0x1ca),'currency':_0x3bb054(0x1fd),'minimumFractionDigits':0x0})['format'](Math[_0x3bb054(0x21e)](workerTasks[_0x336990][_0x3bb054(0x1cf)]*speakersPerMonth*months*hourlySalaryEngineer*PerUnitFactor('totalCostUnit')*0x64)/0x64),_0x4d381f[_0x3bb054(0x1b3)][_0x3bb054(0x1f2)]=0x1,_0x4d381f[_0x3bb054(0x1b3)][_0x3bb054(0x1d2)]=_0x3bb054(0x221),_0x55b1af[_0x3bb054(0x1b3)][_0x3bb054(0x1f2)]=0x1,_0x55b1af['style']['minWidth']=_0x3bb054(0x221),_0x55b1af[_0x3bb054(0x1b3)][_0x3bb054(0x20d)]=_0x3bb054(0x1af),_0x279f99[_0x3bb054(0x1eb)](_0x4d381f),_0x279f99[_0x3bb054(0x1eb)](_0x55b1af);}}}function a0_0x25f9(){const _0x5480a7=['totalMaterialCosts:\x20','665397aEPNhY','currency','update','bottom','pie','Lintech\x20Wafers','taskTime','en-US','profit','minWidth','year','10HvKHMf','Revenue','totalEquipmentCost:\x20','hasChildNodes','amount','Labor','#292929','totalCostUnit','length','indirectCost','profitUnit','30%','task','Equipment','Testing','Run\x20CVD\x20Furnace','normal','78fbWmwC','Iron\x20Pellets','forEach','#0AD3FF','display','totalCost','appendChild','fadeOut','datasets','bar','productionVolumeText','monthlyCost','data','flexGrow','markup:\x20','time','E-Gun\x20Evaporator','total','costPieChart','2jPazyc','indirectDetailHolder','getElementById','firstChild','flex','USD','productionMode','rgb(200,\x20200,\x20200)','laborDetailHolder','ERROR!\x20Couldn\x27t\x20match\x20selected\x20unit\x20to\x20factor','Materials','#FF7719','12352nCzXSl','yellow','equipmentDetailHolder','Hydrogen\x20Gas','costExponent','832463DfnnWl','Draw\x20speaker\x20from\x20wafer','sort','pricePerAmount','textAlign','cost','materialCost','productionVolumeUnit','type','wafersPerMonth:\x20','Electricity','9007640YfxlUJ','385685rkruJd','Manufacturing\x20amplifier','speaker','equipmentCost','labels','Material','day','name','totalIndirectCosts:\x20','round','timePriceChart','revenue','40%','materialsDetailHolder','line','rgb(255,\x20255,\x20255)','11151580ZUAlOB','classList','1047oITjVa','Equipment:\x20','#aa54ab','format','costPerSpeaker','none','Easytube\x203000\x20EXT','maxThroughput','Run\x20E-gun\x20Evaporator','right','removeChild','#585563','markup','style','textContent','indexOf','revenueUnit','CVD','#c75138','totalLaborCosts:\x20','156996uUdjjN','value','#55aa7e','log','Manufacturing\x20frame','pow','NumberFormat','createElement','price','Easytube\x206000','waferVolumeText','Indirect','Easytube\x203000','Argon\x20Gas'];a0_0x25f9=function(){return _0x5480a7;};return a0_0x25f9();}function ToggleIndirectDetails(){const _0x3a2bc3=a0_0x3a084f;let _0x46487d=document['getElementById'](_0x3a2bc3(0x1f9));if(_0x46487d[_0x3a2bc3(0x1d7)]()){while(_0x46487d[_0x3a2bc3(0x1fb)]){_0x46487d['removeChild'](_0x46487d[_0x3a2bc3(0x1fb)]);}_0x46487d[_0x3a2bc3(0x1b3)]['display']=_0x3a2bc3(0x1ab);}else{_0x46487d['style'][_0x3a2bc3(0x1e9)]='flex';for(let _0x19406e=0x0;_0x19406e<indirectCosts[_0x3a2bc3(0x1dc)];_0x19406e++){let _0x2cf583=document[_0x3a2bc3(0x1c1)]('p'),_0x179d3e=document[_0x3a2bc3(0x1c1)]('p');_0x2cf583[_0x3a2bc3(0x1b4)]=indirectCosts[_0x19406e]['type'],_0x179d3e[_0x3a2bc3(0x1b4)]=new Intl[(_0x3a2bc3(0x1c0))](_0x3a2bc3(0x1d0),{'style':_0x3a2bc3(0x1ca),'currency':_0x3a2bc3(0x1fd),'minimumFractionDigits':0x0})[_0x3a2bc3(0x22a)](Math[_0x3a2bc3(0x21e)](indirectCosts[_0x19406e][_0x3a2bc3(0x1f0)]*months*PerUnitFactor('totalCostUnit',wafersPerMonth,months))),_0x2cf583[_0x3a2bc3(0x1b3)][_0x3a2bc3(0x1f2)]=0x1,_0x2cf583['style'][_0x3a2bc3(0x1d2)]=_0x3a2bc3(0x221),_0x179d3e[_0x3a2bc3(0x1b3)]['flexGrow']=0x1,_0x179d3e[_0x3a2bc3(0x1b3)][_0x3a2bc3(0x1d2)]='40%',_0x179d3e[_0x3a2bc3(0x1b3)]['textAlign']='right',_0x46487d['appendChild'](_0x2cf583),_0x46487d[_0x3a2bc3(0x1eb)](_0x179d3e);}}}function ConsoleLogValues(_0x308a82,_0x3d99f4,_0x144634,_0x284c85,_0xb9dda9,_0x16d576,_0x48c870,_0x2723b0){const _0x5d9c44=a0_0x3a084f;console[_0x5d9c44(0x1bd)](_0x5d9c44(0x212)+_0x308a82),console[_0x5d9c44(0x1bd)]('months:\x20'+months),console[_0x5d9c44(0x1bd)]('speakersPerMonth:\x20'+speakersPerMonth),console[_0x5d9c44(0x1bd)](_0x5d9c44(0x1f3)+markup),console[_0x5d9c44(0x1bd)](_0x5d9c44(0x228)),equipment[_0x5d9c44(0x1e7)](_0x33d785=>{const _0x33399a=_0x5d9c44;console[_0x33399a(0x1bd)](_0x33d785[_0x33399a(0x21c)]+':\x20'+countOfEquipment[equipment[_0x33399a(0x1b5)](_0x33d785)]);}),console[_0x5d9c44(0x1bd)](_0x5d9c44(0x1d6)+_0x284c85),console[_0x5d9c44(0x1bd)](_0x5d9c44(0x1b9)+_0x16d576),console[_0x5d9c44(0x1bd)](_0x5d9c44(0x1c8)+_0xb9dda9),console[_0x5d9c44(0x1bd)](_0x5d9c44(0x21d)+_0x48c870),console[_0x5d9c44(0x1bd)]('totalProfits:\x20'+_0x2723b0),console['log']('totalPrice:\x20'+_0x144634),console[_0x5d9c44(0x1bd)]('pricePerSpeaker:\x20'+_0x3d99f4);}function DrawText(_0x470eae,_0x587931,_0x491e91,_0x18a2e2,_0x49dc48,_0x277055,_0xf3e669){const _0x5547d7=a0_0x3a084f;let _0x4eac09;switch(document[_0x5547d7(0x1fa)](_0x5547d7(0x210))[_0x5547d7(0x1bb)]){case _0x5547d7(0x1f6):_0x4eac09=months;break;case _0x5547d7(0x1d3):_0x4eac09=0xc;break;case'month':_0x4eac09=0x1;break;case'day':_0x4eac09=0xc/0x16d;break;}UpdateTextContent(_0x5547d7(0x1ef),Math[_0x5547d7(0x21e)](speakersPerMonth*_0x4eac09*0x64)/0x64);switch(document[_0x5547d7(0x1fa)]('waferVolumeUnit')[_0x5547d7(0x1bb)]){case _0x5547d7(0x1f6):_0x4eac09=months;break;case _0x5547d7(0x1d3):_0x4eac09=0xc;break;case'month':_0x4eac09=0x1;break;case _0x5547d7(0x21b):_0x4eac09=0xc/0x34;break;}UpdateTextContent(_0x5547d7(0x1c4),Math[_0x5547d7(0x21e)](wafersPerMonth*_0x4eac09*0x3e8)/0x3e8),UpdateTextContent(_0x5547d7(0x20c),new Intl['NumberFormat'](_0x5547d7(0x1d0),{'style':_0x5547d7(0x1ca),'currency':_0x5547d7(0x1fd),'maximumFractionDigits':0x0})[_0x5547d7(0x22a)](Math[_0x5547d7(0x21e)](_0x470eae))),UpdateTextContent(_0x5547d7(0x1c2),new Intl[(_0x5547d7(0x1c0))]('en-US',{'style':_0x5547d7(0x1ca),'currency':_0x5547d7(0x1fd),'maximumFractionDigits':0x0})[_0x5547d7(0x22a)](Math[_0x5547d7(0x21e)](_0x587931))),UpdateTextContent(_0x5547d7(0x1ea),new Intl[(_0x5547d7(0x1c0))](_0x5547d7(0x1d0),{'style':_0x5547d7(0x1ca),'currency':_0x5547d7(0x1fd),'maximumFractionDigits':0x0})[_0x5547d7(0x22a)](Math[_0x5547d7(0x21e)](_0x491e91+_0x18a2e2+_0x49dc48+_0x277055)*PerUnitFactor('totalCostUnit',wafersPerMonth,months))),UpdateTextContent(_0x5547d7(0x218),new Intl[(_0x5547d7(0x1c0))](_0x5547d7(0x1d0),{'style':_0x5547d7(0x1ca),'currency':_0x5547d7(0x1fd),'maximumFractionDigits':0x0})['format'](Math[_0x5547d7(0x21e)](_0x491e91*PerUnitFactor(_0x5547d7(0x1db),wafersPerMonth,months)))),UpdateTextContent(_0x5547d7(0x20f),new Intl[(_0x5547d7(0x1c0))]('en-US',{'style':_0x5547d7(0x1ca),'currency':_0x5547d7(0x1fd),'maximumFractionDigits':0x0})[_0x5547d7(0x22a)](Math[_0x5547d7(0x21e)](_0x18a2e2*PerUnitFactor(_0x5547d7(0x1db),wafersPerMonth,months)))),UpdateTextContent('laborCost',new Intl[(_0x5547d7(0x1c0))](_0x5547d7(0x1d0),{'style':'currency','currency':_0x5547d7(0x1fd),'maximumFractionDigits':0x0})[_0x5547d7(0x22a)](Math[_0x5547d7(0x21e)](_0x49dc48*PerUnitFactor(_0x5547d7(0x1db),wafersPerMonth,months)))),UpdateTextContent(_0x5547d7(0x1dd),new Intl[(_0x5547d7(0x1c0))]('en-US',{'style':'currency','currency':_0x5547d7(0x1fd),'maximumFractionDigits':0x0})[_0x5547d7(0x22a)](Math[_0x5547d7(0x21e)](_0x277055*PerUnitFactor('totalCostUnit',wafersPerMonth,months)))),UpdateTextContent(_0x5547d7(0x220),new Intl[(_0x5547d7(0x1c0))]('en-US',{'style':_0x5547d7(0x1ca),'currency':_0x5547d7(0x1fd),'maximumFractionDigits':0x0})[_0x5547d7(0x22a)](Math[_0x5547d7(0x21e)](_0x491e91+_0x18a2e2+_0x49dc48+_0x277055)*(0x1+markup/0x64)*PerUnitFactor(_0x5547d7(0x1b6),wafersPerMonth,months))),UpdateTextContent(_0x5547d7(0x1d1),new Intl[(_0x5547d7(0x1c0))](_0x5547d7(0x1d0),{'style':_0x5547d7(0x1ca),'currency':_0x5547d7(0x1fd),'maximumFractionDigits':0x0})[_0x5547d7(0x22a)](Math[_0x5547d7(0x21e)](_0xf3e669*PerUnitFactor(_0x5547d7(0x1de),wafersPerMonth,months))));}function UpdateTextContent(_0x26b831,_0x51d490){const _0x4d639a=a0_0x3a084f;let _0x67a2fe=document['getElementById'](_0x26b831);_0x67a2fe['textContent']!=_0x51d490&&(_0x67a2fe[_0x4d639a(0x226)]['add']('fadeOut'),setTimeout(()=>{const _0x57d355=_0x4d639a;_0x67a2fe[_0x57d355(0x1b4)]=_0x51d490,_0x67a2fe[_0x57d355(0x226)]['remove'](_0x57d355(0x1ec));},0xc8));}function PerUnitFactor(_0x29457f){const _0x35cdac=a0_0x3a084f;switch(document[_0x35cdac(0x1fa)](_0x29457f)[_0x35cdac(0x1bb)]){case'total':return 0x1;case'month':return 0x1/months;case _0x35cdac(0x21b):return 0x1/months/(0x34/0xc*0x28);case _0x35cdac(0x217):return 0x1/(speakersPerMonth*months);}throw new Error(_0x35cdac(0x201));return null;}function DrawResultsBarChart(_0x46644a,_0x35d469,_0x331605,_0x8ed7ba,_0x48884d){const _0xfd5a1b=a0_0x3a084f;let _0x170037=[],_0x4981f6=[],_0x412075=[],_0x487e27=[],_0x148e45=[],_0x1c801f=[],_0x5ee5d3=[];for(let _0x504ba5=0x0;_0x504ba5<months;_0x504ba5++){_0x170037[_0x504ba5]=0x0,_0x4981f6[_0x504ba5]=-0x1*_0x35d469,_0x412075[_0x504ba5]=-0x1*_0x331605,_0x487e27[_0x504ba5]=-0x1*_0x8ed7ba,_0x148e45[_0x504ba5]=_0x48884d,_0x5ee5d3[_0x504ba5]=_0x504ba5+0x1,_0x504ba5>0x0?_0x1c801f[_0x504ba5]=_0x1c801f[_0x504ba5-0x1]+_0x4981f6[_0x504ba5]+_0x412075[_0x504ba5]+_0x487e27[_0x504ba5]+_0x148e45[_0x504ba5]:_0x1c801f[_0x504ba5]=_0x4981f6[_0x504ba5]+_0x412075[_0x504ba5]+_0x487e27[_0x504ba5]+_0x148e45[_0x504ba5]-_0x46644a;}_0x170037[0x0]=-0x1*_0x46644a;let _0x24fb9e=document[_0xfd5a1b(0x1fa)]('resultsBarChart');resultsBarChart!==null?(resultsBarChart[_0xfd5a1b(0x1f1)][_0xfd5a1b(0x1ed)][0x0]['data']=_0x170037,resultsBarChart['data'][_0xfd5a1b(0x1ed)][0x1][_0xfd5a1b(0x1f1)]=_0x4981f6,resultsBarChart[_0xfd5a1b(0x1f1)][_0xfd5a1b(0x1ed)][0x2]['data']=_0x412075,resultsBarChart[_0xfd5a1b(0x1f1)][_0xfd5a1b(0x1ed)][0x3]['data']=_0x487e27,resultsBarChart[_0xfd5a1b(0x1f1)][_0xfd5a1b(0x1ed)][0x4][_0xfd5a1b(0x1f1)]=_0x148e45,resultsBarChart[_0xfd5a1b(0x1f1)][_0xfd5a1b(0x1ed)][0x5][_0xfd5a1b(0x1f1)]=_0x1c801f,resultsBarChart[_0xfd5a1b(0x1f1)][_0xfd5a1b(0x219)]=_0x5ee5d3,resultsBarChart['update']()):resultsBarChart=new Chart(_0x24fb9e,{'type':_0xfd5a1b(0x1ee),'data':{'labels':_0x5ee5d3,'datasets':[{'label':_0xfd5a1b(0x1e1),'data':_0x170037,'backgroundColor':_0xfd5a1b(0x203),'borderWidth':0x0,'order':0x1},{'label':'Labor','data':_0x4981f6,'backgroundColor':_0xfd5a1b(0x1b8),'order':0x1},{'label':_0xfd5a1b(0x202),'data':_0x412075,'backgroundColor':_0xfd5a1b(0x205),'order':0x1},{'label':_0xfd5a1b(0x1c5),'data':_0x487e27,'backgroundColor':_0xfd5a1b(0x229),'order':0x1},{'label':_0xfd5a1b(0x1d5),'data':_0x148e45,'backgroundColor':_0xfd5a1b(0x1bc),'order':0x1},{'label':'Total\x20profit','data':_0x1c801f,'backgroundColor':_0xfd5a1b(0x1e8),'type':_0xfd5a1b(0x223),'borderWidth':0x1,'borderColor':_0xfd5a1b(0x1e8),'order':0x0}]},'options':{'responsive':!![],'plugins':{'legend':{'display':!![],'position':_0xfd5a1b(0x1cc),'labels':{'color':_0xfd5a1b(0x1ff),'font':{'weight':_0xfd5a1b(0x1e4)}}}},'scales':{'x':{'stacked':!![],'ticks':{'display':![]}},'y':{'stacked':!![],'beginAtZero':!![],'ticks':{'display':![]}}}}});}function DrawCostPieChart(_0x16de3b,_0x48e1f8,_0x6c8569,_0x2cf381){const _0xab2cfd=a0_0x3a084f,_0x32f843=['Equipment',_0xab2cfd(0x1d9),_0xab2cfd(0x21a),_0xab2cfd(0x1c5)];let _0x465776=[Math[_0xab2cfd(0x21e)](_0x16de3b),Math[_0xab2cfd(0x21e)](_0x48e1f8),Math['round'](_0x6c8569),Math[_0xab2cfd(0x21e)](_0x2cf381)];const _0x14360d=['#FF7719','#73937E',_0xab2cfd(0x1b1),_0xab2cfd(0x1e8)];costPieChart!==null?(costPieChart[_0xab2cfd(0x1f1)][_0xab2cfd(0x1ed)][0x0][_0xab2cfd(0x1f1)]=_0x465776,costPieChart['update']()):costPieChart=new Chart(document[_0xab2cfd(0x1fa)](_0xab2cfd(0x1f7)),{'type':_0xab2cfd(0x1cd),'data':{'labels':_0x32f843,'datasets':[{'backgroundColor':_0x14360d,'borderColor':_0xab2cfd(0x1da),'borderWidth':0x0,'data':_0x465776}]},'options':{'radius':0x64,'responsive':!![],'plugins':{'legend':{'display':!![],'position':_0xab2cfd(0x1af),'labels':{'color':_0xab2cfd(0x224)}}}}});}function DrawTimePriceLineChart(){const _0x31f2c6=a0_0x3a084f;let _0x5512fe=[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa,0xb,0xc,0xd,0xe,0xf,0x10,0x11,0x12,0x13,0x14],_0x4fc601=[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0];for(let _0x3b5ba1=0x0;_0x3b5ba1<_0x4fc601[_0x31f2c6(0x1dc)];_0x3b5ba1++){_0x4fc601[_0x3b5ba1]=Math['round'](pricePerSpeaker(_0x5512fe[_0x3b5ba1]));}timeCostLineChart!==null?(timeCostLineChart[_0x31f2c6(0x1f1)][_0x31f2c6(0x219)]=_0x5512fe,timeCostLineChart['data'][_0x31f2c6(0x1ed)][0x0][_0x31f2c6(0x1f1)]=_0x4fc601,timeCostLineChart[_0x31f2c6(0x1cb)]()):timeCostLineChart=new Chart(document[_0x31f2c6(0x1fa)](_0x31f2c6(0x21f)),{'type':_0x31f2c6(0x223),'data':{'labels':_0x5512fe,'datasets':[{'fill':![],'lineTension':0.5,'backgroundColor':'#FF7719','borderColor':_0x31f2c6(0x203),'data':_0x4fc601,'borderWidth':0x2}]},'options':{'plugins':{'legend':{'display':![]}},'scales':{'x':{'grid':{'display':![]}},'y':{'grid':{'display':![]},'beginAtZero':!![]}}}});}function pricePerSpeaker(_0x4d1522){const _0x3d6999=a0_0x3a084f;let _0xa6ff62=_0x4d1522/speakersPerWafer,_0x34e806=0x0,_0x5d9fbb=0x0,_0x220769=0x0,_0x25cadd=[0x0,0x0,0x0,0x0];if(document[_0x3d6999(0x1fa)]('productionMode')['value']==0x0){let _0x15956d=['E-Gun\x20Evaporator','CVD'];_0x15956d[_0x3d6999(0x1e7)](_0x3946fc=>{const _0x4f8e3a=_0x3d6999;let _0x3a9956=GetEquipmentOfType(_0x3946fc),_0x1fe244=_0xa6ff62/0xa0;for(let _0x4be5a6=0x0;_0x4be5a6<_0x3a9956['length'];_0x4be5a6++){while(_0x1fe244>_0x3a9956[_0x4be5a6]['maxThroughput']){_0x25cadd[equipment[_0x4f8e3a(0x1b5)](_0x3a9956[_0x4be5a6])]++,_0x1fe244-=_0x3a9956[_0x4be5a6][_0x4f8e3a(0x1ad)];}if(_0x4be5a6<_0x3a9956[_0x4f8e3a(0x1dc)]-0x1){let _0x2d77f1=Math['round'](_0x1fe244/_0x3a9956[_0x4be5a6+0x1][_0x4f8e3a(0x1ad)]);_0x3a9956[_0x4be5a6]['cost']<_0x3a9956[_0x4be5a6+0x1][_0x4f8e3a(0x20e)]*_0x2d77f1&&(_0x25cadd[equipment[_0x4f8e3a(0x1b5)](_0x3a9956[_0x4be5a6])]++,_0x1fe244-=_0x3a9956[_0x4be5a6][_0x4f8e3a(0x1ad)]);}}let _0x2946fe=equipment[_0x4f8e3a(0x1b5)](GetEquipmentOfType(_0x3946fc)[GetEquipmentOfType(_0x3946fc)[_0x4f8e3a(0x1dc)]-0x1]);while(_0x1fe244>0x0){_0x25cadd[_0x2946fe]++,_0x1fe244-=equipment[_0x2946fe]['maxThroughput'];}});for(i=0x0;i<equipment[_0x3d6999(0x1dc)];i++){_0x34e806+=equipment[i][_0x3d6999(0x20e)]*Math[_0x3d6999(0x1bf)](_0x25cadd[i],equipment[i][_0x3d6999(0x208)]);}for(let _0x3e4f28=0x0;_0x3e4f28<Materials[_0x3d6999(0x1dc)]-0x1;_0x3e4f28++){_0x5d9fbb+=Materials[_0x3e4f28][_0x3d6999(0x1aa)]*_0x4d1522*months;}for(let _0x1073fb=0x0;_0x1073fb<workerTasks[_0x3d6999(0x1dc)];_0x1073fb++){_0x220769+=workerTasks[_0x1073fb][_0x3d6999(0x1cf)]*_0x4d1522*months*hourlySalaryEngineer;}}else{for(let _0x55d8b7=0x5;_0x55d8b7<Materials[_0x3d6999(0x1dc)];_0x55d8b7++){_0x5d9fbb+=Materials[_0x55d8b7][_0x3d6999(0x1aa)]*_0x4d1522*months;}for(let _0xcd2021=0x2;_0xcd2021<workerTasks['length'];_0xcd2021++){_0x220769+=workerTasks[_0xcd2021][_0x3d6999(0x1cf)]*_0x4d1522*months*hourlySalaryEngineer;}}let _0x2c6965=0x0;indirectCosts[_0x3d6999(0x1e7)](_0x3b7140=>{const _0x11f327=_0x3d6999;_0x2c6965+=_0x3b7140[_0x11f327(0x1f0)]*months;});let _0xaac48e=_0x220769+_0x2c6965+_0x5d9fbb+_0x34e806,_0x441277=_0xaac48e*(0x1+markup/0x64),_0x1a64d2=_0x441277/months/_0x4d1522;return _0x1a64d2;}
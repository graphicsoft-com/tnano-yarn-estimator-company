const a0_0x5a8aab=a0_0x2179;(function(_0x6ef70d,_0x2af9ea){const _0x4aa70c=a0_0x2179,_0xca4457=_0x6ef70d();while(!![]){try{const _0x306033=parseInt(_0x4aa70c(0xbc))/0x1+-parseInt(_0x4aa70c(0x91))/0x2+-parseInt(_0x4aa70c(0x8d))/0x3*(-parseInt(_0x4aa70c(0xf8))/0x4)+parseInt(_0x4aa70c(0x94))/0x5+-parseInt(_0x4aa70c(0xe4))/0x6+parseInt(_0x4aa70c(0xd4))/0x7*(-parseInt(_0x4aa70c(0xd1))/0x8)+-parseInt(_0x4aa70c(0x78))/0x9*(-parseInt(_0x4aa70c(0x97))/0xa);if(_0x306033===_0x2af9ea)break;else _0xca4457['push'](_0xca4457['shift']());}catch(_0x406e6d){_0xca4457['push'](_0xca4457['shift']());}}}(a0_0x455d,0xb0f27));class Equipment{constructor(_0x530e62,_0x219248,_0x31874c,_0x43bcae,_0x5ccb65){const _0x258c17=a0_0x2179;this[_0x258c17(0xd9)]=_0x530e62,this['name']=_0x219248,this[_0x258c17(0xdb)]=_0x31874c,this[_0x258c17(0xcd)]=_0x43bcae,this[_0x258c17(0x86)]=_0x5ccb65;}}class Material{constructor(_0xf6835f,_0x38de63){const _0x3c0cfb=a0_0x2179;this[_0x3c0cfb(0xd9)]=_0xf6835f,this[_0x3c0cfb(0x9a)]=_0x38de63;}}class Worker{constructor(_0x310c8a,_0x525cdf,_0x1d7a91){const _0x5d4510=a0_0x2179;this[_0x5d4510(0xd9)]=_0x310c8a,this[_0x5d4510(0xf6)]=_0x525cdf,this[_0x5d4510(0xcd)]=_0x1d7a91;}}class IndirectCost{constructor(_0x4b1787,_0x1002bb){this['type']=_0x4b1787,this['monthlyCost']=_0x1002bb;}}const equipment=[];equipment[0x0]=new Equipment(a0_0x5a8aab(0xe5),a0_0x5a8aab(0x93),0x2d2a8,0.75,0x1),equipment[0x1]=new Equipment(a0_0x5a8aab(0xe5),a0_0x5a8aab(0xf7),0x3d090,0x20,0x1),equipment[0x2]=new Equipment(a0_0x5a8aab(0xe5),'Easytube\x206000',0xc3500,0xc8,0x1),equipment[0x3]=new Equipment(a0_0x5a8aab(0xb7),a0_0x5a8aab(0xc6),0xfa,0x32,0x1),equipment[0x4]=new Equipment(a0_0x5a8aab(0xed),a0_0x5a8aab(0xb2),0x222e0,0x6,0x1),equipment[0x5]=new Equipment(a0_0x5a8aab(0xd0),a0_0x5a8aab(0xb4),0x7d0,0x1/0x4,0.8);const materials=[];materials[0x0]=new Material(a0_0x5a8aab(0xbe),0xc8/0x5),materials[0x1]=new Material(a0_0x5a8aab(0xe3),6.7/0x5),materials[0x2]=new Material(a0_0x5a8aab(0xc8),4.41/0x5),materials[0x3]=new Material('Hydrogen\x20Gas',3.5154/0x5),materials[0x4]=new Material(a0_0x5a8aab(0xac),5.7246/0x5);const workers=[];workers[0x0]=new Worker(a0_0x5a8aab(0x8b),62.5,0x8);const indirectCosts=[];indirectCosts[0x0]=new IndirectCost('Rent',0xfa0),indirectCosts[0x1]=new IndirectCost(a0_0x5a8aab(0xa5),0x78);let amountInput=document[a0_0x5a8aab(0x9e)](a0_0x5a8aab(0x85)),amountUnitInput=document[a0_0x5a8aab(0x9e)](a0_0x5a8aab(0x9d)),monthsInput=document[a0_0x5a8aab(0x9e)](a0_0x5a8aab(0x80)),gramsPerMonth=0x64,amountFactor=0x1,months=0x0,markup=0x0,wafersPerMonth,countOfEquipment=[0x0,0x0,0x0,0x0,0x0,0x0],timeCostLineChart=null,costPieChart=null,resultsBarChart=null;RunCalculator();function AmountUnitChanged(_0x171a79){const _0x10869a=a0_0x5a8aab;switch(_0x171a79){case _0x10869a(0x87):amountFactor=0x1;break;case'kg':amountFactor=0x1/0x3e8;break;case'lbs':amountFactor=0x1/453.592;break;case'km':amountFactor=6.5/0x5;break;case'm':amountFactor=6.5/0x5*0x3e8;break;case'ft':amountFactor=6.5/0x5*0x3e8*3.28084;}amountInput['value']=Math[_0x10869a(0xa1)](gramsPerMonth*amountFactor*0x64)/0x64;}function CompareEquipment(_0xc9a645,_0x25d834){const _0x22c2fd=a0_0x5a8aab;if(_0xc9a645[_0x22c2fd(0xcd)]<_0x25d834['maxThroughput'])return 0x1;else return-0x1;}function GetEquipmentOfType(_0x5859fd){const _0x4c8430=a0_0x5a8aab;let _0x5e4064=0x0;equipment[_0x4c8430(0xa9)](_0x587bf5=>{const _0x79a667=_0x4c8430;if(_0x587bf5[_0x79a667(0xd9)]===_0x5859fd)_0x5e4064++;});let _0x4cdfd2=new Array(_0x5e4064),_0x2851f6=0x0;return equipment['forEach'](_0x199dde=>{_0x199dde['type']===_0x5859fd&&(_0x4cdfd2[_0x2851f6]=_0x199dde,_0x2851f6++);}),_0x4cdfd2[_0x4c8430(0xcc)](CompareEquipment),_0x4cdfd2;}function RunCalculator(){const _0x394e0c=a0_0x5a8aab;gramsPerMonth=document[_0x394e0c(0x9e)](_0x394e0c(0x85))[_0x394e0c(0xd6)]/amountFactor,months=document[_0x394e0c(0x9e)](_0x394e0c(0x80))[_0x394e0c(0xd6)],markup=document[_0x394e0c(0x9e)](_0x394e0c(0x84))[_0x394e0c(0xd6)],wafersPerMonth=gramsPerMonth*6.5/0x5*0x5;let _0x493add=0x0,_0x5530a8=0x0;countOfEquipment=[0x0,0x0,0x0,0x0,0x0,0x0];if(document[_0x394e0c(0x9e)](_0x394e0c(0xa4))[_0x394e0c(0xd6)]==0x0){let _0x290989=['E-Gun\x20Evaporator','CVD',_0x394e0c(0xb7),_0x394e0c(0xd0)];_0x290989[_0x394e0c(0xa9)](_0x11c44d=>{const _0x449bf8=_0x394e0c;let _0x2ba20b=GetEquipmentOfType(_0x11c44d),_0x58d4c2=wafersPerMonth/0xa0;for(let _0x434756=0x0;_0x434756<_0x2ba20b[_0x449bf8(0x95)];_0x434756++){while(_0x58d4c2>_0x2ba20b[_0x434756][_0x449bf8(0xcd)]){countOfEquipment[equipment[_0x449bf8(0xf1)](_0x2ba20b[_0x434756])]++,_0x58d4c2-=_0x2ba20b[_0x434756][_0x449bf8(0xcd)];}if(_0x434756<_0x2ba20b[_0x449bf8(0x95)]-0x1){let _0x5f0a7b=Math[_0x449bf8(0xa1)](_0x58d4c2/_0x2ba20b[_0x434756+0x1]['maxThroughput']);_0x2ba20b[_0x434756][_0x449bf8(0xdb)]<_0x2ba20b[_0x434756+0x1][_0x449bf8(0xdb)]*_0x5f0a7b&&(countOfEquipment[equipment[_0x449bf8(0xf1)](_0x2ba20b[_0x434756])]++,_0x58d4c2-=_0x2ba20b[_0x434756]['maxThroughput']);}}let _0xb92c98=equipment[_0x449bf8(0xf1)](GetEquipmentOfType(_0x11c44d)[GetEquipmentOfType(_0x11c44d)[_0x449bf8(0x95)]-0x1]);while(_0x58d4c2>0x0){countOfEquipment[_0xb92c98]++,_0x58d4c2-=equipment[_0xb92c98]['maxThroughput'];}});for(i=0x0;i<equipment[_0x394e0c(0x95)];i++){_0x493add+=equipment[i][_0x394e0c(0xdb)]*Math['pow'](countOfEquipment[i],equipment[i][_0x394e0c(0x86)]);}materials[_0x394e0c(0xa9)](_0xff4c48=>{const _0x4bd5d8=_0x394e0c;_0x5530a8+=_0xff4c48[_0x4bd5d8(0x9a)]*wafersPerMonth*months;});}else _0x493add=Math[_0x394e0c(0x89)](Math[_0x394e0c(0xd2)](wafersPerMonth/0xa0/equipment[0x5][_0x394e0c(0xcd)]),equipment[0x5][_0x394e0c(0x86)])*equipment[0x5][_0x394e0c(0xdb)],_0x5530a8=wafersPerMonth*months*0x3e8;let _0x12defc=Math['ceil'](wafersPerMonth/0xa0/workers[0x0]['maxThroughput']),_0x560641=_0x12defc*workers[0x0][_0x394e0c(0xf6)]*0xa0*months,_0x1d872b=0x0;indirectCosts['forEach'](_0x525f43=>{const _0x3c3df1=_0x394e0c;_0x1d872b+=_0x525f43[_0x3c3df1(0xf9)]*months;});let _0x563f65=(_0x560641+_0x1d872b+_0x5530a8+_0x493add)/months,_0x5a092d=_0x563f65*months,_0x1a8d86=_0x5a092d*(0x1+markup/0x64),_0x2a49ec=_0x1a8d86-_0x5a092d,_0x53de4f=_0x1a8d86/months/gramsPerMonth;DrawTimePriceLineChart(),DrawCostPieChart(_0x493add,_0x560641,_0x5530a8,_0x1d872b);let _0x45a57d=_0x563f65*(0x1+markup/0x64);DrawResultsBarChart(Math['round'](_0x493add),Math['round'](_0x560641/months),Math[_0x394e0c(0xa1)](_0x5530a8/months),Math['round'](_0x1d872b/months),Math[_0x394e0c(0xa1)](_0x45a57d)),DrawText(wafersPerMonth,_0x53de4f,_0x1a8d86,_0x493add,_0x5530a8,_0x560641,_0x1d872b,_0x2a49ec),CloseAllDetails(),ConsoleLogValues(wafersPerMonth,_0x53de4f,_0x1a8d86,_0x493add,_0x5530a8,_0x560641,_0x1d872b,_0x2a49ec);}function CloseAllDetails(){const _0x5801ff=a0_0x5a8aab;let _0xf0b514=document[_0x5801ff(0x9e)](_0x5801ff(0xef));if(_0xf0b514[_0x5801ff(0x77)]()){while(_0xf0b514[_0x5801ff(0xc2)]){_0xf0b514[_0x5801ff(0xc7)](_0xf0b514[_0x5801ff(0xc2)]);}_0xf0b514[_0x5801ff(0xe8)][_0x5801ff(0xaa)]=_0x5801ff(0xc1);}let _0xe3dff1=document[_0x5801ff(0x9e)](_0x5801ff(0xca));if(_0xe3dff1[_0x5801ff(0x77)]()){while(_0xe3dff1[_0x5801ff(0xc2)]){_0xe3dff1['removeChild'](_0xe3dff1[_0x5801ff(0xc2)]);}_0xe3dff1[_0x5801ff(0xe8)][_0x5801ff(0xaa)]=_0x5801ff(0xc1);}let _0x45ddb4=document[_0x5801ff(0x9e)](_0x5801ff(0xb5));if(_0x45ddb4[_0x5801ff(0x77)]()){while(_0x45ddb4['firstChild']){_0x45ddb4[_0x5801ff(0xc7)](_0x45ddb4[_0x5801ff(0xc2)]);}_0x45ddb4['style']['display']='none';}let _0x5d3ccf=document[_0x5801ff(0x9e)](_0x5801ff(0xe1));if(_0x5d3ccf[_0x5801ff(0x77)]()){while(_0x5d3ccf[_0x5801ff(0xc2)]){_0x5d3ccf[_0x5801ff(0xc7)](_0x5d3ccf[_0x5801ff(0xc2)]);}_0x5d3ccf['style'][_0x5801ff(0xaa)]=_0x5801ff(0xc1);}}function ToggleEquipmentDetails(){const _0x24608e=a0_0x5a8aab;let _0x328bd0=document[_0x24608e(0x9e)]('equipmentDetailHolder');if(_0x328bd0['hasChildNodes']()){while(_0x328bd0['firstChild']){_0x328bd0['removeChild'](_0x328bd0['firstChild']);}_0x328bd0[_0x24608e(0xe8)][_0x24608e(0xaa)]=_0x24608e(0xc1);}else{_0x328bd0['style']['display']=_0x24608e(0xe9);if(document[_0x24608e(0x9e)](_0x24608e(0xa4))[_0x24608e(0xd6)]==0x0)for(let _0x24def2=0x0;_0x24def2<equipment[_0x24608e(0x95)];_0x24def2++){if(countOfEquipment[_0x24def2]!==0x0){let _0x26c800=document[_0x24608e(0xc0)]('p'),_0x1247ee=document[_0x24608e(0xc0)]('p');_0x26c800[_0x24608e(0x79)]=countOfEquipment[_0x24def2]+'x\x20'+equipment[_0x24def2][_0x24608e(0xd9)]+':\x20'+equipment[_0x24def2][_0x24608e(0x8c)],_0x1247ee['textContent']=new Intl['NumberFormat'](_0x24608e(0xf0),{'style':_0x24608e(0xb6),'currency':_0x24608e(0x81),'minimumFractionDigits':0x0})[_0x24608e(0xaf)](Math[_0x24608e(0xa1)](equipment[_0x24def2]['cost']*countOfEquipment[_0x24def2]*PerUnitFactor(_0x24608e(0xd8),wafersPerMonth,months))),_0x26c800[_0x24608e(0xe8)][_0x24608e(0xc4)]=0x1,_0x1247ee['style'][_0x24608e(0xc4)]=0x1,_0x1247ee[_0x24608e(0xe8)]['minWidth']=_0x24608e(0xec),_0x1247ee['style'][_0x24608e(0x7d)]=_0x24608e(0xd7),_0x328bd0[_0x24608e(0xa8)](_0x26c800),_0x328bd0[_0x24608e(0xa8)](_0x1247ee);}}else{let _0xf5d1ad=document[_0x24608e(0xc0)]('p');_0xf5d1ad[_0x24608e(0x79)]='-',_0xf5d1ad[_0x24608e(0xe8)][_0x24608e(0xc4)]=0x1,_0x328bd0[_0x24608e(0xa8)](_0xf5d1ad);}}}function ToggleMaterialDetails(){const _0x47563d=a0_0x5a8aab;let _0x24d61c=document[_0x47563d(0x9e)]('materialsDetailHolder');if(_0x24d61c[_0x47563d(0x77)]()){while(_0x24d61c[_0x47563d(0xc2)]){_0x24d61c['removeChild'](_0x24d61c['firstChild']);}_0x24d61c[_0x47563d(0xe8)]['display']=_0x47563d(0xc1);}else{_0x24d61c[_0x47563d(0xe8)][_0x47563d(0xaa)]=_0x47563d(0xe9);if(document[_0x47563d(0x9e)](_0x47563d(0xa4))[_0x47563d(0xd6)]==0x0)for(let _0x11debb=0x0;_0x11debb<materials[_0x47563d(0x95)];_0x11debb++){let _0x1c0fd4=document[_0x47563d(0xc0)]('p'),_0x593f3a=document[_0x47563d(0xc0)]('p');_0x1c0fd4[_0x47563d(0x79)]=materials[_0x11debb][_0x47563d(0xd9)],_0x593f3a[_0x47563d(0x79)]=new Intl['NumberFormat'](_0x47563d(0xf0),{'style':_0x47563d(0xb6),'currency':'USD','minimumFractionDigits':0x0})[_0x47563d(0xaf)](Math[_0x47563d(0xa1)](materials[_0x11debb]['costPerWafer']*wafersPerMonth*months*PerUnitFactor(_0x47563d(0xd8),wafersPerMonth,months))),_0x1c0fd4['style'][_0x47563d(0xc4)]=0x1,_0x1c0fd4[_0x47563d(0xe8)][_0x47563d(0x7b)]=_0x47563d(0xa0),_0x593f3a[_0x47563d(0xe8)][_0x47563d(0xc4)]=0x1,_0x593f3a[_0x47563d(0xe8)][_0x47563d(0x7b)]=_0x47563d(0xa0),_0x593f3a[_0x47563d(0xe8)][_0x47563d(0x7d)]=_0x47563d(0xd7),_0x24d61c['appendChild'](_0x1c0fd4),_0x24d61c[_0x47563d(0xa8)](_0x593f3a);}else{let _0x4bc51e=document[_0x47563d(0xc0)]('p'),_0x54907b=document[_0x47563d(0xc0)]('p');_0x4bc51e[_0x47563d(0x79)]=_0x47563d(0xa2),_0x54907b[_0x47563d(0x79)]=new Intl[(_0x47563d(0xf2))](_0x47563d(0xf0),{'style':'currency','currency':_0x47563d(0x81),'minimumFractionDigits':0x0})[_0x47563d(0xaf)](Math[_0x47563d(0xa1)](0x3e8*wafersPerMonth*months*PerUnitFactor(_0x47563d(0xd8),wafersPerMonth,months))),_0x4bc51e[_0x47563d(0xe8)][_0x47563d(0xc4)]=0x1,_0x4bc51e[_0x47563d(0xe8)]['minWidth']='40%',_0x54907b[_0x47563d(0xe8)]['flexGrow']=0x1,_0x54907b[_0x47563d(0xe8)][_0x47563d(0x7b)]='40%',_0x54907b['style'][_0x47563d(0x7d)]=_0x47563d(0xd7),_0x24d61c[_0x47563d(0xa8)](_0x4bc51e),_0x24d61c[_0x47563d(0xa8)](_0x54907b);}}}function ToggleLaborDetails(){const _0x32966f=a0_0x5a8aab;let _0x19681e=document[_0x32966f(0x9e)](_0x32966f(0xb5));if(_0x19681e[_0x32966f(0x77)]()){while(_0x19681e[_0x32966f(0xc2)]){_0x19681e[_0x32966f(0xc7)](_0x19681e[_0x32966f(0xc2)]);}_0x19681e[_0x32966f(0xe8)][_0x32966f(0xaa)]='none';}else{_0x19681e['style'][_0x32966f(0xaa)]='flex';for(let _0x2a49c6=0x0;_0x2a49c6<workers[_0x32966f(0x95)];_0x2a49c6++){let _0x26c4b7=document[_0x32966f(0xc0)]('p'),_0x3fb231=document[_0x32966f(0xc0)]('p');_0x26c4b7['textContent']=Math['ceil'](wafersPerMonth/0xa0/workers[_0x2a49c6][_0x32966f(0xcd)])+_0x32966f(0x7c)+workers[_0x2a49c6]['type'],_0x3fb231[_0x32966f(0x79)]=new Intl[(_0x32966f(0xf2))](_0x32966f(0xf0),{'style':_0x32966f(0xb6),'currency':_0x32966f(0x81),'minimumFractionDigits':0x0})['format'](Math[_0x32966f(0xa1)](workers[_0x2a49c6]['hourlySalary']*0x28*0x34/0xc*months*PerUnitFactor(_0x32966f(0xd8),wafersPerMonth,months))),_0x26c4b7['style'][_0x32966f(0xc4)]=0x1,_0x26c4b7[_0x32966f(0xe8)][_0x32966f(0x7b)]=_0x32966f(0xa0),_0x3fb231['style'][_0x32966f(0xc4)]=0x1,_0x3fb231['style'][_0x32966f(0x7b)]=_0x32966f(0xa0),_0x3fb231[_0x32966f(0xe8)]['textAlign']='right',_0x19681e['appendChild'](_0x26c4b7),_0x19681e[_0x32966f(0xa8)](_0x3fb231);}}}function ToggleIndirectDetails(){const _0x8d1cbe=a0_0x5a8aab;let _0x1421c3=document[_0x8d1cbe(0x9e)](_0x8d1cbe(0xe1));if(_0x1421c3['hasChildNodes']()){while(_0x1421c3['firstChild']){_0x1421c3[_0x8d1cbe(0xc7)](_0x1421c3[_0x8d1cbe(0xc2)]);}_0x1421c3['style']['display']=_0x8d1cbe(0xc1);}else{_0x1421c3[_0x8d1cbe(0xe8)]['display']=_0x8d1cbe(0xe9);for(let _0x476f9c=0x0;_0x476f9c<indirectCosts['length'];_0x476f9c++){let _0x310b50=document[_0x8d1cbe(0xc0)]('p'),_0x2274fd=document[_0x8d1cbe(0xc0)]('p');_0x310b50[_0x8d1cbe(0x79)]=indirectCosts[_0x476f9c][_0x8d1cbe(0xd9)],_0x2274fd['textContent']=new Intl['NumberFormat'](_0x8d1cbe(0xf0),{'style':_0x8d1cbe(0xb6),'currency':'USD','minimumFractionDigits':0x0})[_0x8d1cbe(0xaf)](Math[_0x8d1cbe(0xa1)](indirectCosts[_0x476f9c][_0x8d1cbe(0xf9)]*months*PerUnitFactor(_0x8d1cbe(0xd8),wafersPerMonth,months))),_0x310b50['style'][_0x8d1cbe(0xc4)]=0x1,_0x310b50[_0x8d1cbe(0xe8)][_0x8d1cbe(0x7b)]='40%',_0x2274fd[_0x8d1cbe(0xe8)][_0x8d1cbe(0xc4)]=0x1,_0x2274fd[_0x8d1cbe(0xe8)]['minWidth']=_0x8d1cbe(0xa0),_0x2274fd[_0x8d1cbe(0xe8)]['textAlign']=_0x8d1cbe(0xd7),_0x1421c3[_0x8d1cbe(0xa8)](_0x310b50),_0x1421c3['appendChild'](_0x2274fd);}}}function ConsoleLogValues(_0x4cdc00,_0x47ce36,_0x18dd73,_0x4a3b4d,_0xeb2ef,_0x3f4f4e,_0x553a53,_0x48d0f1){const _0x1a35d5=a0_0x5a8aab;console['log']('wafersPerMonth:\x20'+_0x4cdc00),console[_0x1a35d5(0x9f)](_0x1a35d5(0xf4)+months),console[_0x1a35d5(0x9f)](_0x1a35d5(0xea)+gramsPerMonth),console[_0x1a35d5(0x9f)](_0x1a35d5(0xe7)+markup),console[_0x1a35d5(0x9f)](_0x1a35d5(0xad)),equipment[_0x1a35d5(0xa9)](_0x1cc46e=>{const _0x187602=_0x1a35d5;console[_0x187602(0x9f)](_0x1cc46e[_0x187602(0x8c)]+':\x20'+countOfEquipment[equipment['indexOf'](_0x1cc46e)]);}),console[_0x1a35d5(0x9f)]('totalEquipmentCost:\x20'+_0x4a3b4d),console[_0x1a35d5(0x9f)](_0x1a35d5(0x83)+_0x3f4f4e),console[_0x1a35d5(0x9f)](_0x1a35d5(0x9c)+_0xeb2ef),console[_0x1a35d5(0x9f)](_0x1a35d5(0x8e)+_0x553a53),console[_0x1a35d5(0x9f)](_0x1a35d5(0xd5)+_0x48d0f1),console[_0x1a35d5(0x9f)](_0x1a35d5(0xc5)+_0x18dd73),console[_0x1a35d5(0x9f)]('pricePerGram:\x20'+_0x47ce36);}function DrawText(_0x187862,_0x4ba0cb,_0x3fe62e,_0x3b5cf2,_0x3cc4bf,_0x78522e,_0x3d62f4,_0x5bfd60){const _0xf28354=a0_0x5a8aab;let _0x4326d2;switch(document[_0xf28354(0x9e)](_0xf28354(0x76))[_0xf28354(0xd6)]){case _0xf28354(0x7a):_0x4326d2=months;break;case _0xf28354(0xe0):_0x4326d2=0xc;break;case _0xf28354(0xfb):_0x4326d2=0x1;break;case'day':_0x4326d2=0xc/0x16d;break;}UpdateTextContent('waferVolumeText',Math[_0xf28354(0xa1)](_0x187862*_0x4326d2));switch(document[_0xf28354(0x9e)](_0xf28354(0xa6))[_0xf28354(0xd6)]){case _0xf28354(0x87):_0x4326d2=0x1;break;case'kg':_0x4326d2=0x1/0x3e8;break;case _0xf28354(0x9b):_0x4326d2=0x1/453.6;break;case'km':_0x4326d2=6.5/0x5;break;case'm':_0x4326d2=6.5/0x5*0x3e8;break;case'ft':_0x4326d2=6.5/0x5*0x3e8*3.048;break;}UpdateTextContent(_0xf28354(0xfc),Math[_0xf28354(0xa1)](gramsPerMonth*months*_0x4326d2*0x64)/0x64);switch(document['getElementById'](_0xf28354(0xb8))['value']){case _0xf28354(0x87):_0x4326d2=0x1;break;case'kg':_0x4326d2=0x3e8;break;case _0xf28354(0x9b):_0x4326d2=453.592;break;case'km':_0x4326d2=0x5/6.5;break;case'm':_0x4326d2=0x5/6.5/0x3e8;break;case'ft':_0x4326d2=0x5/6.5/0x3e8/3.048;break;}UpdateTextContent('pricePerAmount',new Intl[(_0xf28354(0xf2))](_0xf28354(0xf0),{'style':_0xf28354(0xb6),'currency':_0xf28354(0x81),'maximumFractionDigits':0x0})['format'](Math[_0xf28354(0xa1)](_0x4ba0cb*_0x4326d2))),UpdateTextContent(_0xf28354(0xda),new Intl[(_0xf28354(0xf2))](_0xf28354(0xf0),{'style':_0xf28354(0xb6),'currency':_0xf28354(0x81),'maximumFractionDigits':0x0})[_0xf28354(0xaf)](Math[_0xf28354(0xa1)](_0x3fe62e))),UpdateTextContent('totalCost',new Intl[(_0xf28354(0xf2))](_0xf28354(0xf0),{'style':_0xf28354(0xb6),'currency':_0xf28354(0x81),'maximumFractionDigits':0x0})[_0xf28354(0xaf)](Math['round'](_0x3b5cf2+_0x3cc4bf+_0x78522e+_0x3d62f4)*PerUnitFactor(_0xf28354(0xd8),_0x187862,months))),UpdateTextContent('equipmentCost',new Intl[(_0xf28354(0xf2))]('en-US',{'style':_0xf28354(0xb6),'currency':_0xf28354(0x81),'maximumFractionDigits':0x0})['format'](Math['round'](_0x3b5cf2*PerUnitFactor('totalCostUnit',_0x187862,months)))),UpdateTextContent(_0xf28354(0xb9),new Intl[(_0xf28354(0xf2))]('en-US',{'style':_0xf28354(0xb6),'currency':'USD','maximumFractionDigits':0x0})['format'](Math[_0xf28354(0xa1)](_0x3cc4bf*PerUnitFactor(_0xf28354(0xd8),_0x187862,months)))),UpdateTextContent(_0xf28354(0xcf),new Intl[(_0xf28354(0xf2))]('en-US',{'style':'currency','currency':_0xf28354(0x81),'maximumFractionDigits':0x0})[_0xf28354(0xaf)](Math['round'](_0x78522e*PerUnitFactor(_0xf28354(0xd8),_0x187862,months)))),UpdateTextContent('indirectCost',new Intl[(_0xf28354(0xf2))](_0xf28354(0xf0),{'style':_0xf28354(0xb6),'currency':_0xf28354(0x81),'maximumFractionDigits':0x0})[_0xf28354(0xaf)](Math['round'](_0x3d62f4*PerUnitFactor('totalCostUnit',_0x187862,months)))),UpdateTextContent(_0xf28354(0xba),new Intl[(_0xf28354(0xf2))]('en-US',{'style':'currency','currency':_0xf28354(0x81),'maximumFractionDigits':0x0})[_0xf28354(0xaf)](Math[_0xf28354(0xa1)](_0x3b5cf2+_0x3cc4bf+_0x78522e+_0x3d62f4)*(0x1+markup/0x64)*PerUnitFactor('revenueUnit',_0x187862,months))),UpdateTextContent(_0xf28354(0x88),new Intl[(_0xf28354(0xf2))]('en-US',{'style':_0xf28354(0xb6),'currency':_0xf28354(0x81),'maximumFractionDigits':0x0})['format'](Math[_0xf28354(0xa1)](_0x5bfd60*PerUnitFactor(_0xf28354(0xbf),_0x187862,months))));}function UpdateTextContent(_0x50b6de,_0x1d1804){const _0x35cd83=a0_0x5a8aab;let _0x482c3a=document['getElementById'](_0x50b6de);_0x482c3a[_0x35cd83(0x79)]!=_0x1d1804&&(_0x482c3a[_0x35cd83(0xf5)][_0x35cd83(0xc9)](_0x35cd83(0x8a)),setTimeout(()=>{const _0x13bd28=_0x35cd83;_0x482c3a[_0x13bd28(0x79)]=_0x1d1804,_0x482c3a[_0x13bd28(0xf5)]['remove'](_0x13bd28(0x8a));},0xc8));}function PerUnitFactor(_0x2bd482){const _0x5d9b51=a0_0x5a8aab;switch(document['getElementById'](_0x2bd482)[_0x5d9b51(0xd6)]){case _0x5d9b51(0x7a):return 0x1;case _0x5d9b51(0xfb):return 0x1/months;case _0x5d9b51(0x87):return 0x1/(wafersPerMonth*months*(0x1/(6.5/0x5*0x5)));case'kg':return 0x3e8/(wafersPerMonth*months*(0x1/(6.5/0x5*0x5)));case _0x5d9b51(0x9b):return 453.592/(wafersPerMonth*months*(0x1/(6.5/0x5*0x5)));case'km':return 0x5/(6.5*wafersPerMonth*months*(0x1/(6.5/0x5*0x5)));case'm':return 0x5/(6.5*0x3e8*wafersPerMonth*months*(0x1/(6.5/0x5*0x5)));case'ft':return 0x5/(3.28084*6.5*0x3e8*wafersPerMonth*months*(0x1/(6.5/0x5*0x5)));}throw new Error(_0x5d9b51(0xdc));return null;}function a0_0x2179(_0x3fed3e,_0x2a8563){const _0x455deb=a0_0x455d();return a0_0x2179=function(_0x217906,_0x16f0d9){_0x217906=_0x217906-0x76;let _0x2d4b0a=_0x455deb[_0x217906];return _0x2d4b0a;},a0_0x2179(_0x3fed3e,_0x2a8563);}function a0_0x455d(){const _0x3278ff=['Laser\x20Engraver','pricePerAmountUnit','materialCost','revenue','resultsBarChart','854991bnKhZI','Equipment','Silicon\x20Wafers','profitUnit','createElement','none','firstChild','Material','flexGrow','totalPrice:\x20','Ray5\x205W','removeChild','Acetylene\x20Gas','add','materialsDetailHolder','CostPerGramFunction,\x20grams\x20per\x20month:\x20','sort','maxThroughput','#0AD3FF','laborCost','Spinning\x20Machine','440536LMrSBl','ceil','bar','70kvPiKg','totalProfits:\x20','value','right','totalCostUnit','type','price','cost','ERROR!\x20Couldn\x27t\x20match\x20selected\x20unit\x20to\x20factor','#292929','Indirect','CostPerGramFunction,\x20total\x20material\x20cost:\x20','year','indirectDetailHolder','line','Iron\x20Pellets','23268gtLtoW','CVD','labels','markup:\x20','style','flex','gramsPerMonth:\x20','CostPerGramFunction,\x20total\x20equipment\x20cost:\x20','30%','E-Gun\x20Evaporator','CostPerGramFunction,\x20total\x20labor\x20cost:\x20','equipmentDetailHolder','en-US','indexOf','NumberFormat','#585563','months:\x20','classList','hourlySalary','Easytube\x203000\x20EXT','24kFovpJ','monthlyCost','rgb(255,\x20255,\x20255)','month','productionVolumeText','waferVolumeUnit','hasChildNodes','9hOCQwX','textContent','total','minWidth','\x20x\x20','textAlign','Labor','CostPerGramFunction,\x20cost\x20per\x20gram:\x20','time','USD','update','totalLaborCosts:\x20','markup','amount','costExponent','grams','profit','pow','fadeOut','Engineer','name','219690pnnflb','totalIndirectCosts:\x20','yellow','Materials','2544496Cnhyef','#73937E','Easytube\x203000','5395995YqfpZI','length','#aa54ab','1780010DHeViR','timePriceChart','data','costPerWafer','lbs','totalMaterialCosts:\x20','amountUnit','getElementById','log','40%','round','Lintec\x20Wafers','rgb(200,\x20200,\x20200)','productionMode','Electricity','productionVolumeUnit','pie','appendChild','forEach','display','bottom','Argon\x20Gas','Equipment:\x20','costPieChart','format','datasets','CostPerGramFunction,\x20total\x20indirect\x20cost:\x20','CHA\x20Mark\x2050','#FF7719','Custom','laborDetailHolder','currency'];a0_0x455d=function(){return _0x3278ff;};return a0_0x455d();}function DrawResultsBarChart(_0x5e0587,_0x306525,_0x99cf60,_0x4ae7a1,_0x2fb781){const _0x1012d0=a0_0x5a8aab;let _0x39f40d=[],_0x4f3b58=[],_0xcd9fe5=[],_0x23d3b3=[],_0x503533=[],_0xcf1786=[],_0x114149=[];for(let _0x20bcaf=0x0;_0x20bcaf<months;_0x20bcaf++){_0x39f40d[_0x20bcaf]=0x0,_0x4f3b58[_0x20bcaf]=-0x1*_0x306525,_0xcd9fe5[_0x20bcaf]=-0x1*_0x99cf60,_0x23d3b3[_0x20bcaf]=-0x1*_0x4ae7a1,_0x503533[_0x20bcaf]=_0x2fb781,_0x114149[_0x20bcaf]=_0x20bcaf+0x1,_0x20bcaf>0x0?_0xcf1786[_0x20bcaf]=_0xcf1786[_0x20bcaf-0x1]+_0x4f3b58[_0x20bcaf]+_0xcd9fe5[_0x20bcaf]+_0x23d3b3[_0x20bcaf]+_0x503533[_0x20bcaf]:_0xcf1786[_0x20bcaf]=_0x4f3b58[_0x20bcaf]+_0xcd9fe5[_0x20bcaf]+_0x23d3b3[_0x20bcaf]+_0x503533[_0x20bcaf]-_0x5e0587;}_0x39f40d[0x0]=-0x1*_0x5e0587;let _0x26cec5=document[_0x1012d0(0x9e)](_0x1012d0(0xbb));resultsBarChart!==null?(resultsBarChart[_0x1012d0(0x99)][_0x1012d0(0xb0)][0x0][_0x1012d0(0x99)]=_0x39f40d,resultsBarChart['data']['datasets'][0x1]['data']=_0x4f3b58,resultsBarChart['data'][_0x1012d0(0xb0)][0x2][_0x1012d0(0x99)]=_0xcd9fe5,resultsBarChart[_0x1012d0(0x99)][_0x1012d0(0xb0)][0x3][_0x1012d0(0x99)]=_0x23d3b3,resultsBarChart[_0x1012d0(0x99)]['datasets'][0x4]['data']=_0x503533,resultsBarChart[_0x1012d0(0x99)][_0x1012d0(0xb0)][0x5][_0x1012d0(0x99)]=_0xcf1786,resultsBarChart['data'][_0x1012d0(0xe6)]=_0x114149,resultsBarChart['update']()):resultsBarChart=new Chart(_0x26cec5,{'type':_0x1012d0(0xd3),'data':{'labels':_0x114149,'datasets':[{'label':_0x1012d0(0xbd),'data':_0x39f40d,'backgroundColor':'#FF7719','borderWidth':0x0,'order':0x1},{'label':_0x1012d0(0x7e),'data':_0x4f3b58,'backgroundColor':'#c75138','order':0x1},{'label':_0x1012d0(0x90),'data':_0xcd9fe5,'backgroundColor':_0x1012d0(0x8f),'order':0x1},{'label':_0x1012d0(0xde),'data':_0x23d3b3,'backgroundColor':_0x1012d0(0x96),'order':0x1},{'label':'Revenue','data':_0x503533,'backgroundColor':'#55aa7e','order':0x1},{'label':'Total\x20profit','data':_0xcf1786,'backgroundColor':_0x1012d0(0xce),'type':_0x1012d0(0xe2),'borderWidth':0x1,'borderColor':_0x1012d0(0xce),'order':0x0}]},'options':{'responsive':!![],'plugins':{'legend':{'display':!![],'position':_0x1012d0(0xab),'labels':{'color':_0x1012d0(0xa3),'font':{'weight':'normal'}}}},'scales':{'x':{'stacked':!![],'ticks':{'display':![]}},'y':{'stacked':!![],'beginAtZero':!![],'ticks':{'display':![]}}}}});}function DrawCostPieChart(_0x279a26,_0x11c91d,_0xe72f4a,_0x492fbe){const _0x4413eb=a0_0x5a8aab,_0x52ef6c=[_0x4413eb(0xbd),_0x4413eb(0x7e),_0x4413eb(0xc3),_0x4413eb(0xde)];let _0x5bcf03=[Math[_0x4413eb(0xa1)](_0x279a26),Math['round'](_0x11c91d),Math[_0x4413eb(0xa1)](_0xe72f4a),Math[_0x4413eb(0xa1)](_0x492fbe)];const _0x2283fa=[_0x4413eb(0xb3),_0x4413eb(0x92),_0x4413eb(0xf3),_0x4413eb(0xce)];costPieChart!==null?(costPieChart[_0x4413eb(0x99)][_0x4413eb(0xb0)][0x0]['data']=_0x5bcf03,costPieChart[_0x4413eb(0x82)]()):costPieChart=new Chart(document[_0x4413eb(0x9e)](_0x4413eb(0xae)),{'type':_0x4413eb(0xa7),'data':{'labels':_0x52ef6c,'datasets':[{'backgroundColor':_0x2283fa,'borderColor':_0x4413eb(0xdd),'borderWidth':0x0,'data':_0x5bcf03}]},'options':{'radius':0x64,'responsive':!![],'plugins':{'legend':{'display':!![],'position':_0x4413eb(0xd7),'labels':{'color':_0x4413eb(0xfa)}}}}});}function DrawTimePriceLineChart(){const _0xc3a620=a0_0x5a8aab;let _0x454f0c=0x14,_0x1fb53f=[],_0x3e36b3=[];for(let _0x233fb8=0x0;_0x233fb8<_0x454f0c;_0x233fb8++){_0x1fb53f[_0x233fb8]=_0x233fb8+0x1;}for(let _0x139260=0x0;_0x139260<_0x1fb53f[_0xc3a620(0x95)];_0x139260++){_0x3e36b3[_0x139260]=Math[_0xc3a620(0xa1)](CostPerGram(_0x1fb53f[_0x139260])*(0x1+markup/0x64));}timeCostLineChart!==null?(timeCostLineChart[_0xc3a620(0x99)][_0xc3a620(0xe6)]=_0x1fb53f,timeCostLineChart[_0xc3a620(0x99)][_0xc3a620(0xb0)][0x0][_0xc3a620(0x99)]=_0x3e36b3,timeCostLineChart[_0xc3a620(0x82)]()):timeCostLineChart=new Chart(document['getElementById'](_0xc3a620(0x98)),{'type':_0xc3a620(0xe2),'data':{'labels':_0x1fb53f,'datasets':[{'fill':![],'lineTension':0.5,'backgroundColor':_0xc3a620(0xb3),'borderColor':_0xc3a620(0xb3),'data':_0x3e36b3,'borderWidth':0x2}]},'options':{'plugins':{'legend':{'display':![]}},'scales':{'x':{'grid':{'display':![]}},'y':{'grid':{'display':![]},'beginAtZero':!![]}}}});}function CostPerGram(_0xd5bc46){const _0x264c21=a0_0x5a8aab;console[_0x264c21(0x9f)](_0x264c21(0xcb)+_0xd5bc46);let _0x2be2ff=_0xd5bc46*6.5/0x5*0x5;console[_0x264c21(0x9f)]('CostPerGramFunction,\x20wafers\x20per\x20month:\x20'+_0x2be2ff);let _0x124272=0x0,_0x223dd5=0x0,_0x1d2db2=[0x0,0x0,0x0,0x0,0x0,0x0];if(document['getElementById'](_0x264c21(0xa4))[_0x264c21(0xd6)]==0x0){let _0x48ed90=['E-Gun\x20Evaporator',_0x264c21(0xe5),_0x264c21(0xb7),_0x264c21(0xd0)];_0x48ed90['forEach'](_0x43ec3d=>{const _0x35d819=_0x264c21;let _0xe30def=GetEquipmentOfType(_0x43ec3d),_0x3928ff=_0x2be2ff/0xa0;for(let _0x1196af=0x0;_0x1196af<_0xe30def[_0x35d819(0x95)];_0x1196af++){while(_0x3928ff>_0xe30def[_0x1196af][_0x35d819(0xcd)]){_0x1d2db2[equipment[_0x35d819(0xf1)](_0xe30def[_0x1196af])]++,_0x3928ff-=_0xe30def[_0x1196af][_0x35d819(0xcd)];}if(_0x1196af<_0xe30def['length']-0x1){let _0x2c509c=Math[_0x35d819(0xa1)](_0x3928ff/_0xe30def[_0x1196af+0x1][_0x35d819(0xcd)]);_0xe30def[_0x1196af][_0x35d819(0xdb)]<_0xe30def[_0x1196af+0x1][_0x35d819(0xdb)]*_0x2c509c&&(_0x1d2db2[equipment[_0x35d819(0xf1)](_0xe30def[_0x1196af])]++,_0x3928ff-=_0xe30def[_0x1196af]['maxThroughput']);}}let _0x2cea91=equipment[_0x35d819(0xf1)](GetEquipmentOfType(_0x43ec3d)[GetEquipmentOfType(_0x43ec3d)[_0x35d819(0x95)]-0x1]);while(_0x3928ff>0x0){_0x1d2db2[_0x2cea91]++,_0x3928ff-=equipment[_0x2cea91]['maxThroughput'];}});for(i=0x0;i<equipment['length'];i++){_0x124272+=equipment[i][_0x264c21(0xdb)]*Math[_0x264c21(0x89)](_0x1d2db2[i],equipment[i]['costExponent']);}materials[_0x264c21(0xa9)](_0x5a01fb=>{_0x223dd5+=_0x5a01fb['costPerWafer']*_0x2be2ff*months;});}else _0x124272=Math[_0x264c21(0x89)](Math['ceil'](_0x2be2ff/0xa0/equipment[0x5]['maxThroughput']),equipment[0x5][_0x264c21(0x86)])*equipment[0x5]['cost'],_0x223dd5=_0x2be2ff*months*0x3e8;console[_0x264c21(0x9f)](_0x264c21(0xeb)+_0x124272),console[_0x264c21(0x9f)](_0x264c21(0xdf)+_0x223dd5);let _0x1cc958=Math[_0x264c21(0xd2)](_0x2be2ff/0xa0/workers[0x0][_0x264c21(0xcd)]),_0x1580ae=_0x1cc958*workers[0x0]['hourlySalary']*0xa0*months;console[_0x264c21(0x9f)](_0x264c21(0xee)+_0x1580ae);let _0x2a3849=0x0;indirectCosts[_0x264c21(0xa9)](_0x5cad70=>{const _0x3ec7c5=_0x264c21;_0x2a3849+=_0x5cad70[_0x3ec7c5(0xf9)]*months;}),console[_0x264c21(0x9f)](_0x264c21(0xb1)+_0x2a3849);let _0x1bcfdb=(_0x1580ae+_0x2a3849+_0x223dd5+_0x124272)/months;return console[_0x264c21(0x9f)](_0x264c21(0x7f)+_0x1bcfdb/_0xd5bc46),_0x1bcfdb/_0xd5bc46;}
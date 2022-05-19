import type { NextApiRequest, NextApiResponse } from 'next';
import type { Product } from '../../core/product';

import nameData from '../../data/stoneNames.json';
import descriptionData from '../../data/descriptionNames.json';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const usedNames: string[] = [];

   const names = nameData.names;

   const categories: string[] = [
      't-shirt',
      'shirts',
      'dresses',
      'skirts',
      'shorts',
      'pants',
      'socks',
   ];

   const response: string = await fetch(
      'https://br.depositphotos.com/stock-photos/pedra.html'
   ).then(res => res.text());

   let pictureTagFilter: RegExp = new RegExp(
      '(<picture>)(.+?)(</picture>)',
      'gi'
   );

   let picturesTag: RegExpMatchArray | null = response.match(pictureTagFilter);

   let imgSrcFilter: RegExp = new RegExp('(?<=src=")(.+?)(?=")', 'gi');

   if (typeof picturesTag != null) {
      let stones: Product[] = (picturesTag as RegExpMatchArray)
         .map(e => {
            let filteredElement: RegExpMatchArray | null =
               e.match(imgSrcFilter);

            if (typeof filteredElement != null) {
               return (filteredElement as RegExpMatchArray)[0];
            }
         })
         .map((e, i) => {
            let random: number = Math.floor(Math.random() * names.length);
            let name: string = names[random];

            let randomCategory: number = Math.floor(
               Math.random() * categories.length
            );

            let category: string = categories[randomCategory];

            while (usedNames.includes(name)) {
               random = Math.floor(Math.random() * names.length);
               name = names[random];
            }

            usedNames.push(name);

            const obj: Product = {
               image: e as string,
               category,
               name: `Pedra ${name}`,
               description: generateDescription(`Pedra ${name}`),
               id: i + 1,
               sales: Math.floor(Math.random() * 2000),
            };

            return obj;
         });

      res.status(200).json({ stones });
   }
}

function generateDescription(stoneName: string): string {
   var names1 = descriptionData.names1;
   var names2 = descriptionData.names2;
   var names3 = descriptionData.names3;
   var names4 = descriptionData.names4;
   var names5 = descriptionData.names5;
   var names6 = descriptionData.names6;
   var names7 = descriptionData.names7;
   var names8 = descriptionData.names8;
   var names9 = descriptionData.names9;
   var names10 = descriptionData.names10;
   var names11 = descriptionData.names11;
   var names12 = descriptionData.names12;
   var names13 = descriptionData.names13;
   var names14 = descriptionData.names14;
   var names15 = descriptionData.names15;
   var names16 = descriptionData.names16;
   var names17 = descriptionData.names17;
   var names18 = descriptionData.names18;
   var names20 = descriptionData.names20;
   var names21 = descriptionData.names21;
   var names22 = descriptionData.names22;
   var names23 = descriptionData.names23;
   var names24 = descriptionData.names24;
   var names25 = descriptionData.names25;
   var names26 = descriptionData.names26;
   var names27 = descriptionData.names27;
   var names28 = descriptionData.names28;

   var random21 = Math.floor(Math.random() * names21.length);
   if (random21 > 3 && random21 < 9) {
      names1 = [
         'Purple',
         'Blue',
         'Green',
         'Red',
         'White',
         'Blonde',
         'Brown',
         'Light blue',
         'Light green',
         'Pink',
         'Silver',
         'Golden',
      ];
      names2 = [
         'perfectly groomed hair',
         'well groomed hair',
         'sleek hair',
         'long hair',
         'curly hair',
         'straight hair',
         'flowing hair',
         'wavy hair',
         'shoulder-length hair',
      ];
      names4 = [
         'thin',
         'chiseled',
         'craggy',
         'fine',
         'fresh',
         'full',
         'furrowed',
         'handsome',
         'sculpted',
         'strong',
         'long',
         'round',
         'bony',
         'lean',
      ];
      names7 = [
         'blue',
         'brown',
         'hazel',
         'green',
         'amber',
         'gray',
         'sapphire',
         'aquamarine',
         'pink',
         'red',
         'golden',
         'violet',
         'silver',
      ];
      names10 = [
         'village',
         'lands',
         'people',
         'town',
         'families',
         'ships',
         'armies',
         'homes',
         'castle',
         'palace',
         'natives',
         'wildlife',
         'farms',
         'country',
         'haven',
         'mountains',
         'rivers',
         'river',
         'sea',
         'woods',
         'woodlands',
         'ancestors',
         'children',
         'spirits',
      ];
      names18 = [
         'Wyninn',
         'Ninleyn',
         'Tinlef',
         'Elluin',
         'Elduin',
         'Elmon',
         'Almar',
         'Alas',
         'Alwin',
         'Almer',
         'Alre',
         'Alred',
         'Alen',
         'Alluin',
         'Alduin',
         'Almon',
         'Hagwin',
         'Hagmere',
      ];
   } else if (random21 == 10) {
      names1 = [
         'Purple',
         'Blue',
         'Green',
         'Red',
         'White',
         'Brown',
         'Light blue',
         'Light green',
         'Orange',
         'Silver',
         'Golden',
         'Yellow',
         'Black',
         'Blue',
         'Brown',
         'Hazel',
         'Black',
         'Green',
         'Amber',
         'Gray',
      ];
      names2 = [
         'short hair',
         'short hair',
         'short hair',
         'long hair',
         'curly hair',
         'straight hair',
         'sleek hair',
         'frizzy hair',
         'shaggy hair',
         'shoulder-length hair',
      ];
      names4 = [
         'thin',
         'fine',
         'fresh',
         'full',
         'handsome',
         'round',
         'bony',
         'lean',
         'skinny',
         'fat',
      ];
      names18 = [
         'Glinoflonk',
         'Bonlebick',
         'Bimbik',
         'Gnobflink',
         'Binflonk',
         'Nittlewizz',
         'Gimkink',
         'Merbibus',
         'Totonk',
         'Dinnus',
      ];
   } else if (random21 >= 11 || random21 < 14) {
      names2 = [
         'short hair',
         'short hair',
         'short hair',
         'long hair',
         'curly hair',
         'straight hair',
         'coily hair',
         'shaggy hair',
         'greasy hair',
         'oily hair',
         'frizzy hair',
         'shoulder-length hair',
         'dreadlocks',
      ];
      names4 = [
         'thin',
         'chiseled',
         'craggy',
         'fine',
         'fresh',
         'full',
         'furrowed',
         'strong',
         'long',
         'round',
         'bony',
         'lean',
         'skinny',
      ];
      names10 = [
         'village',
         'city',
         'lands',
         'people',
         'town',
         'families',
         'ships',
         'armies',
         'homes',
         'stronghold',
         'natives',
         'wildlife',
         'farms',
         'country',
         'haven',
         'mountains',
         'rivers',
         'river',
         'sea',
         'clan',
         'folk',
         'tribe',
         'tribes',
         'ancestors',
         'children',
         'deserts',
         'mines',
         'spirits',
      ];
      if (random21 == 11) {
         names18 = [
            'Ekon',
            'Erasto',
            'Haijen',
            'Hamedi',
            'Hokima',
            'Jaafan',
            'Jabir',
            'Jalai',
            'Javyn',
            'Jijel',
            'Juma',
            'Jumoke',
            'Kaijin',
            'Kazko',
            'Maalik',
            'Makas',
            'Malak',
            'Nyabingi',
            'Rahjin',
            'Rakash',
            'Rashi',
            'Razi',
         ];
      } else if (random21 == 12) {
         names18 = [
            'Gnarg',
            'Gnarlug',
            'Gnorl',
            'Gnorth',
            'Gnoth',
            'Gnurl',
            'Golag',
            'Golub',
            'Gomatug',
            'Gomoku',
            'Gorgu',
            'Gorlag',
            'Grikug',
            'Grug',
            'Grukag',
            'Grukk',
            'Grung',
            'Gruul',
         ];
      } else if (random21 == 13) {
         names18 = [
            'Karax',
            'Baxeek',
            'Soxart',
            'Rezikmez',
            'Fizink',
            'Wimax',
            'Jexmelyx',
            'Grexmex',
            'Tinkbelex',
            'Greekeels',
         ];
      }
   } else if (random21 >= 14 || random21 <= 16) {
      names2 = [
         'short hair',
         'short hair',
         'short hair',
         'long hair',
         'curly hair',
         'coily hair',
         'greasy hair',
         'shaggy hair',
         'oily hair',
         'frizzy hair',
         'shoulder-length hair',
      ];
      names4 = [
         'craggy',
         'fine',
         'fresh',
         'full',
         'furrowed',
         'strong',
         'long',
         'round',
         'fat',
      ];
      if (random21 == 14) {
         names18 = [
            'Bengahdar',
            'Banbrek',
            'Drumdus',
            'Dulgarn',
            'Galirg',
            'Kharnur',
            'Iromuador',
            'Ragorhdrom',
            'Urmbrek',
            'Theledon',
         ];
      }
   }
   var random1 = Math.floor(Math.random() * names1.length);
   var random2 = Math.floor(Math.random() * names2.length);
   var random3 = Math.floor(Math.random() * names3.length);
   var random4 = Math.floor(Math.random() * names4.length);
   var random5 = Math.floor(Math.random() * names5.length);
   var random6 = Math.floor(Math.random() * names6.length);
   var random7 = Math.floor(Math.random() * names7.length);
   var random8 = Math.floor(Math.random() * names8.length);
   var random9 = Math.floor(Math.random() * names9.length);
   var random10 = Math.floor(Math.random() * names10.length);
   var random11 = Math.floor(Math.random() * names11.length);
   var random12 = Math.floor(Math.random() * names12.length);
   if (random12 > 6 && random12 < 9) {
      names13 = [
         'resembling a shield',
         'resembling a sword',
         'resembling a skull',
         'resembling a flag',
         'resembling a tear',
         'of a small dragon',
         'of a small cross',
         'of a small star',
         'of a small eagle',
         'of a small swallow',
         'of a small lion',
         'of a small wolf',
         'of a small bear',
         'of a bear paw',
         'of a lion paw',
         'of an eagle claw',
         'of a talon',
         'of a dagger',
         'of a wolf paw',
         'of a shield',
         'of a sword',
         'of a skull',
         'of a flag',
         'of a tear',
         'resembling a small dragon',
         'resembling a small cross',
         'resembling a small star',
         'resembling a small eagle',
         'resembling a small swallow',
         'resembling a small lion',
         'resembling a small wolf',
         'resembling a small bear',
         'resembling a bear paw',
         'resembling a lion paw',
         'resembling an eagle claw',
         'resembling a talon',
         'resembling a dagger',
         'resembling a wolf paw',
      ];
      names14 = [
         'is almost hidden',
         'is displayed',
         'is subtly placed',
         'is prominently featured',
         'is proudly worn',
      ];
      names15 = [
         'on the right side of his neck',
         'on the left side of his neck',
         'just below his right eye',
         'just below his left eye',
         'on the side of his right cheekbone',
         'on the side of his left cheekbone',
         'on the side of the left eye',
         'on the side of his right eye',
         'just above the side of his left eye',
         'just above the side of his right eye',
         'just above the right side of his right eyebrow',
         'just above the left side of his left eyebrow',
      ];
   } else if (random12 == 9) {
      names13 = [
         'in the form of 2 stripes running from above the eyes to the bottom of the cheeks',
         'in the form of 2 stripes on each side of the face, running from just above the eyes to the bottom of the cheeks',
         'in the form of 1 stripe under his right eye',
         'in the form of 1 stripe under his left eye',
         'in the form of 2 stripes under his right eye',
         'in the form of 2 stripes under his left eye',
         'in the form of 1 stripe under each eye',
         'in the form of 1 stripe under each eye',
         'in the form of 2 stripes under each eye',
         'in the form of 2 stripes under each eye',
         'in the form of a stripe above and below his right eye',
         'in the form of a stripe above and below his left eye',
         'in the form of a stripe above and below both his eyes',
         'in the form of 1 stripe above and 2 stripes below his right eye',
         'in the form of 1 stripe above and 2 stripes below his left eye',
         'in the form of 1 stripe above and 2 stripes below both his eyes',
         'in the form of a diagonal line across his right eye',
         'in the form of a diagonal line across his left eye',
         'resembling a lightning bolt under his right eye',
         'resembling a lightning bolt under his left eye',
         'resembling a horizontal lightning bolt under his right eye',
         'resembling a horizontal lightning bolt under his left eye',
         'resembling two large lightning bolts on each side of his face',
      ];
      names14 = [
         'marks his heritage',
         'marks his ancestry',
         'marks his skills in combat',
         'marks his rank',
         'marks his upbringing',
         'marks his legacy',
         'marks his birthright',
         'marks his heirship',
         'marks his descent',
         'marks his lineage',
         'marks his blood relation',
      ];
      names15 = ['but, more importantly'];
   } else if (random12 == 10) {
      names13 = ['are spread'];
      names14 = [
         'charmingly',
         'gracefully',
         'beautifully',
         'elegantly',
         'seductively',
         'alluringly',
         'delightfully',
         'delicately',
         'graciously',
         'neatly',
         'oddly',
         'awkwardly',
         'grotesquely',
         'gracelessly',
         'unusually',
         'peculiarly',
      ];
      names15 = [
         'on his left cheek and',
         'on his right cheek and',
         'across his whole face and',
         'across his forehead and',
         'around his nose and',
         'on his neck and',
      ];
      names16 = [
         'a pleasant memory',
         'an aching memory',
         'a burning memory',
         'a stinging memory',
         'a tormenting memory',
         'a lasting burden',
         'an amusing memory',
         'a delightful memory',
         'a pleasurable memory',
         'a bittersweet memory',
         'a heartbreaking memory',
         'an agonizing memory',
         'a grievous memory',
         'a satisfying memory',
         'a fascinating memory',
         'a captivating memory',
         'an intriguing memory',
         'a compelling memory',
      ];
      names17 = [
         'his past',
         'his upbringing',
         'his fortunate upbringing',
         'his former lovers',
         'his fortunate looks',
         'his fortunate survival',
         'his luck',
         'his luck in battles',
         'his luck in love',
         'his fortunate destiny',
         'his adventurous love life',
         'his reckless luck',
         'his fortunate adventures',
         'his unfortunate upbringing',
         'his unfortunate looks',
         'his lack of luck in love',
         'his unadventurous love life',
         'his unfortunate adventures',
      ];
   } else if (random12 == 11) {
      names13 = ['are spread'];
      names14 = [
         'charmingly',
         'gracefully',
         'beautifully',
         'elegantly',
         'gorgeously',
         'handsomely',
         'seductively',
         'alluringly',
         'delightfully',
         'delicately',
         'graciously',
         'neatly',
      ];
      names15 = [
         'around his cheeks and',
         'across his whole face and',
         'across his cheeks and',
         'across his cheeks and forehead and',
         'around his nose and cheekbones and',
      ];
      names16 = [
         'a pleasant memory',
         'an amusing memory',
         'a delightful memory',
         'a gracious memory',
         'a pleasurable memory',
         'a bittersweet memory',
         'a heartbreaking memory',
         'a beautiful memory',
         'a satisfying memory',
         'a fascinating memory',
         'a captivating memory',
         'an intriguing memory',
         'a compelling memory',
      ];
      names17 = [
         'his past',
         'his upbringing',
         'his fortunate upbringing',
         'his former lovers',
         'his fortunate looks',
         'his fortunate survival',
         'his luck',
         'his luck in battles',
         'his luck in love',
         'his fortunate destiny',
         'his adventurous love life',
         'his reckless luck',
         'his fortunate adventures',
      ];
   } else if (random12 > 11) {
      names13 = [
         'charmingly',
         'gracefully',
         'beautifully',
         'elegantly',
         'gorgeously',
         'handsomely',
         'seductively',
         'alluringly',
         'delightfully',
         'graciously',
      ];
      names14 = ['compliments his'];
      names15 = [
         'eyes and',
         'cheekbones and',
         'cheeks and',
         'mouth and',
         'hair and',
         'nose and',
         'nose and mouth and',
         'eyes and mouth and',
         'eyes and cheekbones and',
         'eyes and hair and',
         'hair and cheekbones and',
      ];
      names16 = [
         'a pleasant memory',
         'an amusing memory',
         'a delightful memory',
         'a gracious memory',
         'a pleasurable memory',
         'a bittersweet memory',
         'a heartbreaking memory',
         'a beautiful memory',
         'a satisfying memory',
         'a fascinating memory',
         'a captivating memory',
         'an intriguing memory',
         'a compelling memory',
      ];
      names17 = [
         'his past',
         'his upbringing',
         'his fortunate upbringing',
         'his former lovers',
         'his fortunate looks',
         'his fortunate survival',
         'his luck',
         'his luck in battles',
         'his luck in love',
         'his fortunate destiny',
         'his adventurous love life',
         'his reckless luck',
         'his fortunate adventures',
      ];
   }
   var random13 = Math.floor(Math.random() * names13.length);
   var random14 = Math.floor(Math.random() * names14.length);
   var random15 = Math.floor(Math.random() * names15.length);
   var random16 = Math.floor(Math.random() * names16.length);
   var random17 = Math.floor(Math.random() * names17.length);
   var random20 = Math.floor(Math.random() * names20.length);
   var random22 = Math.floor(Math.random() * names22.length);
   var random23 = Math.floor(Math.random() * names23.length);
   var random24 = Math.floor(Math.random() * names24.length);
   var random25 = Math.floor(Math.random() * names25.length);
   var random26 = Math.floor(Math.random() * names26.length);
   while (random26 == random25) {
      random26 = Math.floor(Math.random() * names26.length);
   }
   var random27 = Math.floor(Math.random() * names27.length);
   var random28 = Math.floor(Math.random() * names28.length);
   var name =
      names1[random1] +
      ', ' +
      names2[random2] +
      ' ' +
      names3[random3] +
      ' a ' +
      names4[random4] +
      ', ' +
      names5[random5] +
      ' face. ' +
      names6[random6] +
      ' ' +
      names7[random7] +
      ' eyes, set ' +
      names8[random8] +
      ' within their sockets, watch ' +
      names9[random9] +
      ' over the ' +
      names10[random10] +
      " they've " +
      names11[random11] +
      ' for so long.';
   var name2 =
      names12[random12] +
      ' ' +
      names13[random13] +
      ' ' +
      names14[random14] +
      ' ' +
      names15[random15] +
      ' leaves ' +
      names16[random16] +
      ' of ' +
      names17[random17] +
      '.';
   var name3 =
      'This is the face of ' +
      stoneName +
      ', a true ' +
      names20[random20] +
      ' among ' +
      names21[random21] +
      '. He stands ' +
      names22[random22] +
      ' others, despite his ' +
      names23[random23] +
      ' frame.';
   var name4 =
      "There's something " +
      names24[random24] +
      " about him, perhaps it's " +
      names25[random25] +
      " or perhaps it's simply " +
      names26[random26] +
      '. But nonetheless, people tend to ' +
      names27[random27] +
      ', while ' +
      names28[random28] +
      '.';

   return name + '\n' + name2 + '\n' + name3 + '\n' + name4;
}

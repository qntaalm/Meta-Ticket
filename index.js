const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
//====================================
const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton, Modal, TextInputComponent,  showModal, InteractionCollector, SelectMenuComponent, MessageSelectMenu, PermissionFlagsBits } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.MESSAGE_CONTENT] });
//====================================


client.on('ready', () => {
  console.clear()
console.log(`${client.user.tag} is Online 🟢`);
    client.user.setStatus("idle")
    let status =
        [
        `${client.user.username}`,
        `My Dev M7md6565`,
        `My Prefix ${prefix} | Ticket Bot`,
        ]
    setInterval(()=>{
        client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
        },8000)
});

process.on("uncaughtException" , err => {
  return console.log(err)
});

process.on("unhandledRejection" , err => {
  return console.log(err)
});

process.on("rejectionHandled", err => {
  return console.log(err)
});

let prefix = '$'
const db = require('pro.db')

      
const Support = '1267822723502047346'
const LogId = '1267845245505114334'
const sections = [
{
label: 'لجنة الرقابة',
description: 'لفتح تذكرة تخص لجنة الرقابة',
emoji: '📩',
value: 'section1',
modalId: 'ticket1Modal',
questions: [
{ customId: 'name', label: 'يجب عليك التدرج في طلب المساعدة', style: 'SHORT', placeholder: 'ارفق رقم التكت السابق موضح فيه رد المختص علي موضوعك', required: true },
{ customId: 'age', label: 'اسم المشتكي عليه', style: 'SHORT', placeholder: 'ارفق جميع البيانات التي لديك تخص المشتكي عليه', required: true },
{ customId: 'job', label: 'لماذا ترغب في تقديم الشكوي', style: 'SHORT', placeholder: 'طلباتك في تقديم الشكوي', required: true },
{ customId: 'country', label: 'وصف المشكلة بأختصار', style: 'SHORT', placeholder: 'اوصف المشكلة التي واجهتك مع المشتكي عليه', required: true },
{ customId: 'jjob', label: 'هل لديك ادله تثبت صحة المشتكي ارفقها بالتكت', style: 'SHORT', placeholder: 'في حال كان لديك ادلة مقطع او صورة ارفقها بالتكت', required: true }
],
openCategoryId: '1271856330889629767',
closeCategoryId: '1271856330889629767',
logChannelId: `${LogId}`
},
{
label: 'بلاغ ضد مخرب',
description: 'لقتح تذكرة للشكوي علي لاعب داخل الخادم',
emoji: '🚫',
value: 'section2',
modalId: 'ticket2Modal',
questions: [
{ customId: 'device', label: 'اسم حسابك', style: 'SHORT', placeholder: 'اكتب اسم حسابك داخل الخادم', required: true },
{ customId: 'game', label: 'تاريخ الشكاوي بتوقيت مصر', style: 'SHORT', placeholder: 'اكتب التوقيت الحقيقي للمخالفة بتوقيت مصر مثال 8/17/2024' , required: true },
{ customId: 'job', label: 'اسم الشخص المخالف', style: 'SHORT', placeholder: 'يرجي كتابة اسم الشخص المخالف هنا',  required: true },
{ customId: 'test', label: 'رابط الدليل', style: 'SHORT', placeholder: 'ارفق مقطع لا يقل عن 30 ثانية يوضح المخالفة بالكامل يمكنك رفق المقطع داخل التكت', required: true },
{ customId: 'jobb', label: 'اختصار الشكاوي', style: 'SHORT', placeholder: 'يرجي وضع الشكوي لكي نرد عليك بشكل سريع',  required: true }
],
openCategoryId: '1271856554991419492',
closeCategoryId: '1271856554991419492',
logChannelId: `${LogId}`
},
{
label: 'طلب عقوبة إدارية',
description: 'لفتح تذكرة تخص العقوبات الادارية',
emoji: '📩',
value: 'section3',
modalId: 'ticket3Modal',
questions: [
{ customId: 'question1', label: 'اسمك داخل السيرفر', style: 'SHORT', placeholder: 'اكتب اسم حسابك', required: true },
{ customId: 'question2', label: 'سبب التظلم', style: 'SHORT', placeholder: 'اكتب سبب مختصر تقنع الادارة ان البان خطأ وانت مظلوم من قرار البان', required: true },
{ customId: 'question3', label: 'الأدلة', style: 'SHORT', placeholder: 'قم بوضع رابط المقطع او اضف الادلة داخل التكت', required: true }
],
openCategoryId: '1271856507738390548',
closeCategoryId: '1271856507738390548',
logChannelId: `${LogId}`
},
{
label: 'تقديم لاعب معتمد',
description: 'للتقديم علي لاعب معتمد',
emoji: '🤵',
value: 'section4',
modalId: 'ticket4Modal',
questions: [
{ customId: 'q1', label: 'اسمك الحقيقي', style: 'SHORT', placeholder: 'اكتب اسمك', required: true },
{ customId: 'q2', label: 'عمرك الحقيقي', style: 'SHORT', placeholder: 'اكتب عمرك', required: true },
{ customId: 'q3', label: 'مستوى الخبرة بالخادم', style: 'SHORT', placeholder: 'اكتب مستوي الخبرة ثم ارسل صورة توضح المستوي في التكت', required: true },
{ customId: 'q4', label: 'الوظائف المعتمدة التي سبق دخلت بيها', style: 'SHORT', placeholder: 'اكتب اسم الوظائف المعتمدة شرطة - ميكانيكي - أمن منشأت دفاع مدني', required: true }
],
openCategoryId: '1271856645001052161',
closeCategoryId: '1271856645001052161',
logChannelId: `${LogId}`
},
{
label: 'طلب تعويض',
description: 'لطلب تعويض من الادارة',
emoji: '💵',
value: 'section5',
modalId: 'ticket5Modal',
questions: [
{ customId: 'a1', label: 'المبلغ المطلوب لتعويضك', style: 'SHORT', placeholder: 'اكتب المبلغ التي تريد التعويض عليه', required: true },
{ customId: 'a2', label: 'ما هو سبب طلبك التعويض', style: 'SHORT', placeholder: 'اشرح ازاي خسرت المبلغ ولماذا تريد التعويض', required: true },
{ customId: 'a3', label: 'الأدلة', style: 'SHORT', placeholder: 'قم بوضع رابط المقطع او ارسل الادلة عند فتح التكت', required: true },
],
openCategoryId: '1271856599694053407',
closeCategoryId: '1271856599694053407',
logChannelId: `${LogId}`
},
{
label: 'بلاغ على مشكلة فنية',
description: 'لفتح تذكرة للبلاغ علي مشكلة فنية داخل الخادم',
emoji: '📩',
value: 'section6',
modalId: 'ticket6Modal',
questions: [
{ customId: 'b1', label: 'اسم حسابك', style: 'SHORT', placeholder: 'مثال Meta', required: true },
{ customId: 'b2', label: 'اشرح مشكلتك التقنية بشكل واضح', style: 'SHORT', placeholder: 'اشرح هنا', required: true }
],
openCategoryId: '1271856760654794843',
closeCategoryId: '1271856760654794843',
logChannelId: `${LogId}`
},
{
label: 'تقديم صانع محتوى',
description: 'للتقديم علي صانع محتوي',
emoji: '👨‍💻',
value: 'section7',
modalId: 'ticket7Modal',
questions: [
{ customId: 'c1', label: 'نوع التقديم', style: 'SHORT', placeholder: 'ستريمر - يوتيوبر - تيك توكر', required: true },
{ customId: 'c2', label: 'رابط القناة', style: 'SHORT', placeholder: 'انسخ رابط القناة وقم بوضعها هنا', required: true }
],
openCategoryId: '1271856698495205386',
closeCategoryId: '1271856698495205386',
logChannelId: `${LogId}`
},
{
label: 'طلب سكن',
description: 'لطلب سكن للعائلة',
emoji: '👕',
value: 'section8',
modalId: 'ticket8Modal',
questions: [
{ customId: 'd1', label: 'اسم حسابك', style: 'SHORT', placeholder: 'ضع اسم حسابك بالكامل هنا', required: true },
{ customId: 'd2', label: 'اسم شخصيتك', style: 'SHORT', placeholder: 'ضع اسم شخصيتك بالكامل هنا', required: true },
{ customId: 'd3', label: 'اسم عائلتك', style: 'SHORT', placeholder: 'ضع اسم العائلة هنا بالكامل', required: true },
{ customId: 'd4', label: 'هل ستقوم ب ارسال السكن مباشر', style: 'SHORT', placeholder: 'جاوب ب نعم فقط', required: true }
],
openCategoryId: '1271857162221654100',
closeCategoryId: '1271857162221654100',
logChannelId: `${LogId}`
},
{
label: 'الموقع',
description: 'لفتح تذكرة تخص قسم الموقع',
emoji: '🌐',
value: 'section9',
modalId: 'ticket9Modal',
questions: [
{ customId: 'e1', label: 'اجب بنعم', style: 'SHORT', placeholder: 'نعم', required: true }
],
openCategoryId: '1271856811166797884',
closeCategoryId: '1271856811166797884',
logChannelId: `${LogId}`
},
{
label: 'كراج الميكانيكي',
description: 'لفتح تذكرة تخص كراج الميكانيكي',
emoji: '🧑‍🔧',
value: 'section10',
modalId: 'ticket10Modal',
questions: [
{ customId: 'f1', label: 'اسم حسابك', style: 'SHORT', placeholder: 'اسم حسابك', required: true },
{ customId: 'f2', label: 'اسم شخصيتك', style: 'SHORT', placeholder: 'اسم شخصيتك', required: true },
{ customId: 'f3', label: 'ما هي مشكلتك', style: 'SHORT', placeholder: 'المشكلة', required: true }
],
openCategoryId: '1271856854959526030',
closeCategoryId: '1271856854959526030',
logChannelId: `${LogId}`
},
{
label: 'الأمن العام',
description: 'لفتح تذكرة تخص الأمن العام',
emoji: '👮',
value: 'section11',
modalId: 'ticket11Modal',
questions: [
{ customId: 'g1', label: 'اسم حسابك', style: 'SHORT', placeholder: 'اسم حسابك', required: true },
{ customId: 'g2', label: 'اسم شخصيتك', style: 'SHORT', placeholder: 'اسم شخصيتك', required: true },
{ customId: 'g3', label: 'ما هي مشكلتك', style: 'SHORT', placeholder: 'المشكلة', required: true }
],
openCategoryId: '1271857039148056657',
closeCategoryId: '1271857039148056657',
logChannelId: `${LogId}`
},
{
label: 'امن المنشأت',
description: 'لفتح تذكرة تخص أمن المنشأت',
emoji: '💂',
value: 'section12',
modalId: 'ticket12Modal',
questions: [
{ customId: 'k1', label: 'اسم حسابك', style: 'SHORT', placeholder: 'اسم حسابك', required: true },
{ customId: 'k2', label: 'اسم شخصيتك', style: 'SHORT', placeholder: 'اسم شخصيتك', required: true },
{ customId: 'k3', label: 'ما هي مشكلتك', style: 'SHORT', placeholder: 'المشكلة', required: true }
],
openCategoryId: '1271856991689510953',
closeCategoryId: '1271856991689510953',
logChannelId: `${LogId}`
},
{
label: 'الدفاع المدني',
description: 'لفتح تذكرة تخص الدفاع المدني',
emoji: '👨‍⚕️',
value: 'section13',
modalId: 'ticket13Modal',
questions: [
{ customId: 'q1', label: 'اسم حسابك', style: 'SHORT', placeholder: 'اسم حسابك', required: true },
{ customId: 'q2', label: 'اسم شخصيتك', style: 'SHORT', placeholder: 'اسم شخصيتك', required: true },
{ customId: 'q3', label: 'ما هي مشكلتك', style: 'SHORT', placeholder: 'المشكلة', required: true }
],
openCategoryId: '1271857091946086460',
closeCategoryId: '1271857091946086460',
logChannelId: `${LogId}`
}
];

client.on('messageCreate', async message => {
if (message.content === prefix + 'send' && message.member.permissions.has('ADMINISTRATOR')) {
const embed = new MessageEmbed()
.setTitle('افتح تذكرة')
.setDescription('اختر القسم المناسب لفتح التذكرة')
.setColor('#00FF00');

const row = new MessageActionRow()
.addComponents(
new MessageSelectMenu()
.setCustomId('select')
.setPlaceholder('اضغط هنا لختيار تذكرة وفتحها .')
.addOptions(
sections.map(section => ({
label: section.label,
description: section.description,
emoji: section.emoji,
value: section.value
}))
)
);

await message.channel.send({ embeds: [embed], components: [row] });
}
});

client.on('interactionCreate', async interaction => {
if (interaction.isSelectMenu() && interaction.customId === 'select') {

let haveTicket = db.get(`Ticket_already_${interaction.user.id}`) || null;

if (haveTicket) {
const tickett = interaction.guild.channels.cache.get(haveTicket);

if (tickett) {
const permissions = tickett.permissionsFor(interaction.user);
let haveTic = permissions.has('VIEW_CHANNEL');

if (haveTic) {
return interaction.reply({ content: 'You already have an open ticket.', ephemeral: true });
}
}
}


const selectedSection = sections.find(section => section.value === interaction.values[0]);

if (selectedSection) {
const modal = new Modal()
.setCustomId(selectedSection.modalId)
.setTitle(`افتتاح تذكرة - ${selectedSection.label}`)
.addComponents(
selectedSection.questions.map(question =>
new MessageActionRow().addComponents(
new TextInputComponent()
.setCustomId(question.customId)
.setLabel(question.label)
.setStyle(question.style)
.setPlaceholder(question.placeholder)
.setRequired(question.required)
)
)
);

await interaction.showModal(modal);
}
}
});

client.on('interactionCreate', async interaction => {
if (interaction.isModalSubmit()) {
const selectedSection = sections.find(section => section.modalId === interaction.customId);

if (selectedSection) {
const fields = selectedSection.questions.map(question => ({
name: question.label,
value: interaction.fields.getTextInputValue(question.customId)
}));

// فتح تذكرة
const channel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
type: 'GUILD_TEXT',
parent: selectedSection.openCategoryId,
permissionOverwrites: [
{ id: interaction.guild.roles.everyone, deny: ['VIEW_CHANNEL'] },
{ id: interaction.user.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
]
});
db.set(`Ticket_already_${interaction.user.id}`, channel.id);
await interaction.reply({ content: `تم فتح التكت ${channel}`, ephemeral: true });

const embed = new MessageEmbed()
.setTitle(`${interaction.user.tag}`)
.setDescription(`**لغلق التذكرة اضغط على الزر بالأسفل !**`)
.setThumbnail(interaction.guild.iconURL({dynamic: true}))
.addFields(fields)
.setColor('DARK_PURPLE')
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL({dynamic: true}))
.setTimestamp();

const closeButton = new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId('close')
.setLabel('Close')
.setStyle('DANGER')
);

await channel.send({ content: `<@${interaction.user.id}>`,embeds: [embed], components: [closeButton] });
}
}
});

client.on('interactionCreate', async interaction => {
if (interaction.isButton() && interaction.customId === 'close') && interaction.member.roles.cache.has(Support))  {
await interaction.reply({ content: 'سيتم اغلاق التذكرة بعد 5 ثواني', ephemeral: true });

setTimeout(async () => {
const selectedSection = sections.find(section => section.openCategoryId === interaction.channel.parentId);

if (selectedSection) {
await interaction.channel.setParent(selectedSection.closeCategoryId);
const ticketChannel = interaction.channel;
const newName = `closed-${interaction.user.username}`;

await ticketChannel.setName(newName);
const logChannel = client.channels.cache.get(selectedSection.logChannelId);

const ClosedEm = new MessageEmbed()
.setDescription(`تم قفل التذكرة **${interaction.channel.name}** بواسطة <@${interaction.user.id}>\nتذكرة فتحت بواسطة \n**${interaction.message.embeds[0].title}**`)
.setColor('ORANGE')
await logChannel.send({embeds: [ClosedEm]})
await interaction.channel.send({embeds: [
new MessageEmbed()
.setDescription('اضغط الزر لحذف التذكرة')
.setColor('RED')
],
components: [
new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId('delete')
.setLabel('حذف التذكرة')
.setStyle('DANGER')
)
]
});
}
}, 5000);
} else if (interaction.isButton() && interaction.customId === 'delete' && interaction.member.roles.cache.has(Support)) {
await interaction.reply({ content: 'سيتم حذف التذكرة خلال 5 ثواني' });

setTimeout(async () => {
const logChannelId = `${LogId}`;
const logChannel = client.channels.cache.get(logChannelId);

if (interaction.channel) {
const selectedSection = sections.find(section => section.closeCategoryId === interaction.channel.parentId);
if (selectedSection) {
const channelName = interaction.channel.name;

const DeletedEm = new MessageEmbed()
.setDescription(`تم حذف التذكرة ${channelName} بواسطة <@${interaction.user.id}>`)
.setColor('RED')
await logChannel.send({embeds: [DeletedEm]})
await logChannel.send(line)
await interaction.channel.delete();
}
} else {
const logChannel = client.channels.cache.get(`${LogId}`); // استخدام معرف روم اللوق الافتراضي

await logChannel.send(`تعذر حذف التذكرة بواسطة <@${interaction.user.id}> لأنها غير موجودة.`);
}
}, 5000);
}
});


//===============================

const ClaimSup = '1267822723502047346'; //ايدي الرتبة يلي تقدر تستلم
//const Admin = '1255590017494155415'; //ايدي رتبة الادمن يلي ما يقدروا يكتبوا بعد الاستلام 
const HighAdmin = '1255590017494155415'; //ايدي رتبة الادارة العليا تقدر تكتب
const LOG_CHANNEL_ID = '1267845245505114334'; //روم اللوق

client.on('channelCreate', async (channel) => {
    if (channel.type === 'GUILD_TEXT' && channel.name.startsWith('ticket-')) {
        setTimeout(async () => {
            const embed = new MessageEmbed()
                .setDescription('اضغط على الزر لاستلام التذكرة')
                .setColor('#00FF00');

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('claim')
                        .setLabel('استلام التذكرة')
                        .setStyle('PRIMARY')
                );

            await channel.send({ embeds: [embed], components: [row] });

            const ticketOwnerName = channel.name.split('-')[1];
            const member = channel.guild.members.cache.find(m => m.user.username.toLowerCase() === ticketOwnerName.toLowerCase());

            if (member) {
                await channel.permissionOverwrites.create(member, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
            }
        }, 3000);
    }
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    const { customId, channel, member, guild } = interaction;

    if (customId === 'claim') {
        if (!member.roles.cache.has(ClaimSup)) {
            return interaction.reply({ content: 'ليس لديك الصلاحية لاستلام التذكرة.', ephemeral: true });
        }

        await updatePermissions(channel, member);

        await interaction.update({
            embeds: [
                new MessageEmbed()
                    .setDescription(`تم استلام التذكرة بواسطة <@${member.id}>`)
                    .setColor('#00FF00')
            ],
            components: []
        });

        const cclaim = new MessageEmbed()
            .setDescription(`تم استلام التذكرة ${channel.name} بواسطة <@${member.id}>`)
            .setColor('BLUE');

        const logChannel = guild.channels.cache.get(LOG_CHANNEL_ID);
        if (logChannel) {
            await logChannel.send({ embeds: [cclaim] });
        }
    }
});

async function updatePermissions(channel, member) {
    const permissions = [
        { id: channel.guild.roles.everyone, deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
        { id: member.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
      //  { id: Admin, deny: ['SEND_MESSAGES'] },
        { id: ClaimSup, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
    ];

    if (member.roles.cache.has(HighAdmin)) {
        permissions.push({ id: member.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] });
    }

    const ticketOwnerName = channel.name.split('-')[1];
    const owner = channel.guild.members.cache.find(m => m.user.username.toLowerCase() === ticketOwnerName.toLowerCase());

    if (owner) {
        permissions.push({ id: owner.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] });
    }

    await channel.permissionOverwrites.set(permissions);
}




client.login(process.env.token)

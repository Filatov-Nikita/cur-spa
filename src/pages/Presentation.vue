<template>
  <q-layout>
    <q-page-container>
      <PresentationVideoBackground :src="video" />
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <keep-alive v-if="slideData">
          <q-page v-if="!showSpeaker">
            <PresentationBuilder
              :type="type"
              :speaker="speaker"
              :slides="slides"
              :currentSlide="currentSlide"
              :color="color"
              :logo="logo"
              :name="name"
              @nextType="nextType"
              @showSpeaker="setSpeakerSlide"
            />
          </q-page>
          <Speaker
            :type="type"
            :logo="logo"
            :name="name"
            :speaker="speaker"
            @prevType="prevType"
            v-else
          />
        </keep-alive>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import PresentationBuilder from 'src/components/Presentation/PresentationBuilder';
import PresentationVideoBackground from 'src/components/Presentation/PresentationVideoBackground';
import Speaker from 'pages/Speaker';
import {mapGetters} from 'vuex'
const types = {
  medical: {
    name: 'Здравоохранение',
    video: 'videos/medicine.mp4',
    color: 'negative',
    logo: 'pres-logos/medical.svg',
    // временно
    speaker: {
      avatar: 'speakers/Забелин.png',
      name: 'Забелин Максим Васильевич',
      position:
        'Заместитель Премьер-министра Правительства Республики Башкортостан - министр здравоохранения',
    },
  },
  transport: {
    name: 'Транспорт и дорожное хозяйство',
    video: 'videos/transport.mp4',
    color: 'blue',
    logo: 'pres-logos/transport.svg',
    // временно
    speaker: {
      avatar: 'speakers/Жульков.jpg',
      name: 'Жульков Виктор Михайлович',
      position:
        'Исполняющий обязанности министра транспорта и дорожного хозяйства Республики Башкортостан',
    },
  },
  zkh: {
    name: 'Жилищно-коммунальное хозяйство',
    video: 'videos/hoz.mp4',
    color: 'orange',
    logo: 'pres-logos/hoz.svg',
    // временно
    speaker: {
      avatar: 'speakers/Голованова.jpg',
      name: 'Голованова Ирина Александровна',
      position:
        'Исполняющий обязанности министра жилищно-коммунального хозяйства Республики Башкортостан',
    },
  },
  emergency: {
    name: 'Чрезвычайные ситуации',
    video: 'videos/situations.mp4',
    color: 'green',
    logo: 'pres-logos/situations.svg',
    // временно
    speaker: {
      avatar: 'speakers/Гумеров.jpg',
      name: 'Гумеров Фарит Рифович',
      position:
        'Председатель Государственного комитета Республики Башкортостан по чрезвычайным ситуациям',
    },
  },
  universal: {
    name: ' Сельское хозяйство',
    video: 'videos/universal.mp4',
    color: 'blueSea',
    logo: 'pres-logos/sel.png',
    // временно
    speaker: {
      avatar: 'speakers/Фазрахманов.jpg',
      name: 'Фазрахманов Ильшат Ильдусович',
      position:
        'Заместитель Премьер-министра Правительства Республики Башкортостан - министр сельского хозяйства',
    },
  },
};

export default {

  props: {
    type: {
      default: 'medical',
      type: String,
    },
    currentSlide: {
      default: 0,
      type: Number,
    },
  },
  created() {},
  data() {
    return {
      types,
      pres: getFromServer(),
    };
  },
  methods: {
    nextType() {
      if (!this.nextTypeName) return this.$router.push({ name: 'home' });
      this.$router.push({
        params: { currentSlide: 0, id: this.nextTypeId, type: this.nextTypeName },
      });
    },
    setSpeakerSlide() {
      this.$router.push({
        params: { currentSlide: 0 },
      });
    },
    prevType() {
      
      if (!this.prevTypeName) return this.$router.push({ name: 'home' });
      this.$router.push({
        params: {
          currentSlide: this.presentations.find(item=>item.type === this.prevTypeName).slides.length,
          id: this.prevTypeId,
          type: this.prevTypeName,
        },
      });
    },
  },
  computed: {
    ...mapGetters({
      slideData: "slideDataGetter"
    }),
    slides() {
      if(this.slideData){
        return this.slideData.presentations.find(item=>{
          return item.id == this.$route.params.id
        }).slides
      }
      // return this.pres[this.type].slides;
    },
    presentations(){
      if(this.slideData){

        return this.slideData.presentations
      }
    },
    showSpeaker() {
      return this.currentSlide === 0;
    },
    typesKeys() {
      if(this.presentations){
        return this.presentations.map(item=>{
          return item.type
        });

      }
    },
    nextTypeId(){
      const i = this.typesKeys.indexOf(this.type);
      let id
      this.presentations.forEach(item=>{
        if(this.typesKeys[i + 1]===item.type){
          id =item.id
        }

      })
      return id
    },
    prevTypeId(){
      const i = this.typesKeys.indexOf(this.type);
      let id
      this.presentations.forEach(item=>{
        if(this.typesKeys[i - 1]===item.type){
          id =item.id
        }

      })
      return id
    },
    nextTypeName() {
      const i = this.typesKeys.indexOf(this.type);
      
      return i !== -1 && this.typesKeys[i + 1];
    },
    prevTypeName() {
      const i = this.typesKeys.indexOf(this.type);
      return i !== -1 && this.typesKeys[i - 1];
    },
    typeParams() {
      if(this.typesKeys){
        const { typesKeys, type, types } = this;
        if (typesKeys.length <= 0) return {};
        if (!(type in types)) return types[typesKeys[0]];
        return types[type];
      }
      return null
    },
    newTypeParams(){
      if(this.presentations){
        
          
        return this.presentations.find(item=>item.id == this.$route.params.id)
      }
      return null
    },
    speaker() {
      if(this.newTypeParams){
        
        return this.newTypeParams.speaker;
      }
      return null
    },
    video() {
      if(this.typeParams){

        return this.typeParams.video;
      }
      return null
    },
    color() {
      if(this.typeParams){
        return this.typeParams.color;
      }
      return null
    },
    logo() {
      if(this.newTypeParams){
        return this.newTypeParams.department.presentation_image.url;
      }
      return null
    },
    name() {
      if(this.newTypeParams){
        return this.newTypeParams.department.name;
      }
      return null
    },
  },
  components: {
    PresentationBuilder,
    PresentationVideoBackground,
    Speaker,
  },
};

function getFromServer() {
  return {
    medical: {
      slides: [
        {
          title: 'Количество заболевших',
          type: 'zdrav_1',
        },
        {
          title: 'Количество заболевших',
          type: 'zdrav_2',
        },
        {
          title: 'Количество заболевших',
          type: 'zdrav_3',
        },
        {
          title: 'Лабораторная диагностика',
          type: 'zdrav_4',
        },
        {
          title: 'Коечный фонд',
          type: 'zdrav_5',
        },
        {
          title: 'Работа инфекционных госпиталей',
          type: 'zdrav_6',
        },
        {
          title: 'Сведения о вызовах скорой медицинской помощи',
          type: 'zdrav_7',
        },
        {
          title: 'Уровень доезда бригад скорой и неотложной помощи',
          type: 'zdrav_8',
        },
        {
          title: 'Вакцинация «Гам-КОВИД-Вак» (Спутник-V)',
          type: 'zdrav_9',
        },
        {
          title: 'Вакцинация «ЭпиВакКорона»',
          type: 'zdrav_10',
        },
        {
          title: 'Сравнение количества вакцинируемых',
          type: 'zdrav_11',
        },
        {
          title: 'Ситуационный антиковидный центр',
          type: 'zdrav_12',
        },
      ],
    },
    transport: {
      slides: [
        {
          title: 'Количество ДТП за неделю',
          type: 'zdrav_transport1',
        },
        {
          title: 'Количество ДТП с начала года',
          type: 'zdrav_transport2',
        },
        {
          title: 'Виды ДТП со смертельным исходом',
          type: 'zdrav_transport3',
        },
        {
          title: 'Водители в состоянии алкогольного опьянения',
          type: 'zdrav_transport4',
        },
        {
          title: 'Работа техники',
          type: 'zdrav_transport5',
        },
        {
          title: 'Ситуация на различных видах транспорта',
          type: 'zdrav_transport6',
        },
        {
          title: 'Ситуация на различных видах транспорта',
          type: 'zdrav_transport7',
        },
        // {
        //   title: 'Ситуация на различных видах транспорта',
        //   type: 'zdrav_transport8',
        // },
      ],
    },
    situations: {
      slides: [
        {
          title: 'Пожары',
          type: 'zdrav_hs1',
        },
        {
          title: 'Пострадавшие в пожарах',
          type: 'zdrav_hs2',
        },
        {
          title: 'Места возникновения пожаров',
          type: 'zdrav_hs3',
        },
        // {
        //   title: 'Количество заболевших 1',
        //   type: 'zdrav_hs4',
        // },
        {
          title: 'Профилактическая работа',
          type: 'zdrav_hs5',
        },
        {
          title: 'Профилактическая работа',
          type: 'zdrav_hs6',
        },
        // {
        //   title: 'Количество заболевших 1',
        //   type: 'zdrav_hs7',
        // },
        {
          title: 'Срабатывание пожарных извещателей',
          type: 'zdrav_hs8',
        },
        {
          title: 'Cообщения о происшествиях на водных объектах',
          type: 'zdrav_hs9',
        },
        // {
        //   title: 'Cообщения о происшествиях на водных объектах',
        //   type: 'zdrav_hs10',
        // },
        {
          title: 'Cообщения о происшествиях на Ж/Д транспорте',
          type: 'zdrav_hs11',
        },
        // {
        //   title: 'Cообщения о происшествиях на Ж/Д транспорте',
        //   type: 'zdrav_hs12',
        // },
        {
          title: 'Происшествия, связанные с падением с высоты',
          type: 'zdrav_hs13',
        },
        // {
        //   title: 'Происшествия, связанные с отравлением угарным газом',
        //   type: 'zdrav_hs14',
        // },
        // {
        //   title: 'Происшествия, связанные с отравлением угарным газом',
        //   type: 'zdrav_hs15',
        // },
        // {
        //   title: 'Происшествия, связанные с падением с высоты',
        //   type: 'zdrav_hs16',
        // },
        // {
        //   title: 'Количество заболевших 1',
        //   type: 'zdrav_hs17',
        // },
        // {
        //   title: 'ЧС,, связанные с неблагоприятными погодными условиями',
        //   type: 'zdrav_hs18',
        // },
        // {
        //   title: 'ЧС,, связанные с неблагоприятными погодными условиями',
        //   type: 'zdrav_hs19',
        // },
        // {
        //   title: 'Террористическая угроза',
        //   type: 'zdrav_hs20',
        // },
        // {
        //   title: 'Террористическая угроза',
        //   type: 'zdrav_hs21',
        // },
      ],
    },
    hoz: {
      slides: [
        {
          title: 'Текущая ситуация',
          type: 'zdrav_zkh1',
        },
        {
          title: 'Аварийные отключения',
          type: 'zdrav_zkh2',
        },
        {
          title: 'Очистка территорий',
          type: 'zdrav_zkh3',
        },
        {
          title: 'Очистка территорий',
          type: 'zdrav_zkh4',
        },
        // {
        //   title: 'Очистка территорий',
        //   type: 'zdrav_zkh5',
        // },
        {
          title: 'Очистка территорий',
          type: 'zdrav_zkh6',
        },
        // {
        //   title: 'Очистка территорий',
        //   type: 'zdrav_zkh8',
        // },
        {
          title: 'Мероприятия по дезинфекции подъездов',
          type: 'zdrav_zkh7',
        },
        {
          title: 'Мероприятия по дезинфекции подъездов',
          type: 'zdrav_zkh9',
        },
        {
          title: 'Фотоотчет №1',
          type: 'zdrav_zkh10',
        },
        // {
        //   title: 'Фотоотчет №1',
        //   type: 'zdrav_zkh11',
        // },
        {
          title: 'Мероприятия по дезинфекции подъездов',
          type: 'zdrav_zkh12',
        },
      ],
    },
    sel: {
      slides: [
        {
          title: 'ХОД ВЕСЕННИХ ПОЛЕВЫХ РАБОТ',
          type: 'zdrav_sel1',
        },
        {
          title: 'ХОД ВЕСЕННИХ ПОЛЕВЫХ РАБОТ',
          type: 'zdrav_sel2',
        },
        {
          title: 'ЯРОВОЙ СЕВ',
          type: 'zdrav_sel3',
        },
      ],
    },
  };
}

function getSlides() {
  return [
    {
      title: 'Количество заболевших 1',
      type: 'zdrav_transport3',
    },
    {
      title: 'Количество заболевших 2',
      type: 'zdrav_transport2',
    },
    {
      title: 'Количество заболевших 3',
      type: 'zdrav_transport5',
    },
    {
      title: 'Количество заболевших 4',
      type: 'zdrav_transport4',
    },
    {
      title: 'Количество заболевших 5',
      type: 'zdrav_transport5',
    },
    {
      title: 'Количество заболевших 6',
      type: 'zdrav_transport6',
    },
    {
      title: 'Количество заболевших 7',
      type: 'zdrav_7',
    },
    {
      title: 'Количество заболевших 8',
      type: 'zdrav_8',
    },
    {
      title: 'Количество заболевших 9',
      type: 'zdrav_9',
    },
    {
      title: 'Количество заболевших 10',
      type: 'zdrav_10',
    },
    {
      title: 'Количество заболевших 11',
      type: 'zdrav_11',
    },
    {
      title: 'Количество заболевших 12',
      type: 'zdrav_12',
    },
  ];
}
</script>

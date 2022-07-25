<template>
  <div class="container pt-5">
    <div class="row row-cols-md-2 row-cols-1">
      <div class="col">
        <h3 class="hear">معلومات عنا</h3>
        <p class="pra lh-lg">
          عيادتينا هي اكبر العيادات في الشرق الاوسط وبها جميع التخصيصات زي اكبر العيادات ويوجد بها تخصصات مثلا الاسنان و النساء والاولدة و العظيم و الرمد و الكثير من باقي التخصيصات ويوجد لدينا اكبر الدكاترو في كل التخصيصات وبها اكبر المعامل التحاليل .
          اما بخصوص السجل التجاري فهو وفقا لمش عرف ايه كده رقم 2022 - 525 وفقا للضرائب مسداد حسب القانون المصري
        </p>
      </div>
      <div class="col">
        <img src="https://thumbs.dreamstime.com/b/group-hospital-doctors-over-health-care-clinic-background-89857953.jpg" style="width: 100%" alt="">
      </div>
    </div>
    <div class="container pt-3">
      <h3 class="text-center hear fw-bold pb-1">ماذا نقدم لكم</h3>
      <p class="text-center fw-bold fs-4" style="color: #1A4D2E">من حقك ان تحصل علي خدمة طبية عالمية في اسرع وقت ممكن</p>
      <div class="row row-cols-md-2 row-cols-1">
        <div class="col">
          <div class="p-3 border bg-light">
            <h3 class="hear">خدمات طبية مريحة جدا</h3>
            <p>
              من حقك ان تحصل علي خدمة طبية مريحة جدا بمعايير عالمية عن طريقة انني عندنا احسن الدكاترو في كل التتخصيصات اللي زي طب الاطفال و طب الاسنان وطب العظيام ومع كل هذا لدينا فريق متخصيص يقوم بعمل تهايل لك بعد اي عملية
            </p>
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            <h3 class="hear">ميسورة التكلفة</h3>
            <p>
              من حقك ان تحصل على إهتمام خاص وشخصي من خلال تطبيق إجراءات طبية تضعك في المقام الأول دائماً مع متابعة مستمرة لبرنامج صحي مصمم خصيصاً لك يشمل التشخيص والعلاج والوقاية واعطاء المشورة في كل ما يخص صحتك في جميع المراحل العمرية.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooTer />
</template>

<script>
import FooTer from "@/components/FooTer.vue"
export default {
  name: "AboutView",
  components: {FooTer}
}
</script>

<style>
p {
  color: var(--text-color)
}
</style>

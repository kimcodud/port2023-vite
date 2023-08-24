import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function port() {
  gsap.registerPlugin(ScrollTrigger);

  const horSection = gsap.utils.toArray('.port__item'); //클래스명으로 다중선택, 가로모드 길이 값 계산

  gsap.to(horSection, {
    xPercent: -120 * (horSection.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#port',
      start: 'top 100px',
      end: '+=3000',
      pin: true,
      scrub: 1,
      markers: false,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });
}

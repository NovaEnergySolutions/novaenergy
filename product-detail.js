// EmailJS 초기화
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("a7uxRw8K7_lp0hm9L"); // EmailJS Public Key
    }
})();

// 네비게이션
const navbar = document.getElementById('navbar');

// 상세 페이지는 항상 스크롤된 네비 상태
if (navbar) {
    navbar.classList.add('scrolled');
}

// 다국어 지원
let currentLanguage = localStorage.getItem('preferred-language') || 'ko';

const translations = {
    ko: {
        name: '한국어',
        flag: '🇰🇷',
        labels: {
            // Specs labels
            modelName: '모델명',
            voltage: '정격 전압',
            capacity: '정격 용량',
            energy: '에너지',
            cycleLife: '사이클 수명',
            dimensions: '사이즈 (L×W×H)',
            weight: '무게',
            range: '주행거리 (완충후)',
            standardCharge: '표준 충전',
            continuousDischarge: '지속 방전',
            maxDischarge: '최대 방전',
            chargeTime: '충전 시간',
            cellConfig: '셀 조합',
            cellSpec: '셀 규격',
            caseIP: '케이스 / IP',
            warranty: '보증기간',
            maxChargeCurrent: '최대 충전 전류',
            maxDischargeCurrent: '최대 방전 전류',
            chargingTemp: '작동 온도 (충전)',
            dischargingTemp: '작동 온도 (방전)',
            storageTemp: '보관 온도',
            protection: '보호 등급',
            // Section titles
            mainSpecs: '주요 사양',
            keyFeatures: '핵심 특징',
            productDescription: '제품 상세 설명',
            technicalSpecs: '기술 사양',
            applications: '적용 분야',
            certificationsTitle: '인증서',
            relatedProducts: '관련 제품',
            productInquiry: '제품 문의',
            // Buttons
            inquiryButton: '제품 문의하기',
            catalogButton: '카탈로그 다운로드',
            sendInquiry: '문의하기',
            // Form
            name: '이름',
            phone: '연락처',
            email: '이메일',
            company: '회사명 (선택)',
            message: '문의 내용',
            productName: '문의 제품',
            privacy: '개인정보 수집 및 이용에 동의합니다',
            // Tabs
            description: '상세설명',
            specs: '기술사양',
            applicationsTab: '적용분야',
            certificationsTab: '인증서',
            // Others
            reviews: '리뷰',
            viewDetails: '상세보기'
        }
    },
    en: {
        name: 'English',
        flag: '🇺🇸',
        labels: {
            // Specs labels
            modelName: 'Model',
            voltage: 'Rated Voltage',
            capacity: 'Rated Capacity',
            energy: 'Energy',
            cycleLife: 'Cycle Life',
            dimensions: 'Size (L×W×H)',
            weight: 'Weight',
            range: 'Range (Full Charge)',
            standardCharge: 'Standard Charge',
            continuousDischarge: 'Continuous Discharge',
            maxDischarge: 'Max Discharge',
            chargeTime: 'Charge Time',
            cellConfig: 'Cell Configuration',
            cellSpec: 'Cell Specification',
            caseIP: 'Case / IP Rating',
            warranty: 'Warranty',
            maxChargeCurrent: 'Max Charge Current',
            maxDischargeCurrent: 'Max Discharge Current',
            chargingTemp: 'Operating Temp (Charge)',
            dischargingTemp: 'Operating Temp (Discharge)',
            storageTemp: 'Storage Temp',
            protection: 'Protection Rating',
            // Section titles
            mainSpecs: 'Main Specifications',
            keyFeatures: 'Key Features',
            productDescription: 'Product Description',
            technicalSpecs: 'Technical Specifications',
            applications: 'Applications',
            certificationsTitle: 'Certifications',
            relatedProducts: 'Related Products',
            productInquiry: 'Product Inquiry',
            // Buttons
            inquiryButton: 'Product Inquiry',
            catalogButton: 'Download Catalog',
            sendInquiry: 'Send Inquiry',
            // Form
            name: 'Name',
            phone: 'Phone',
            email: 'Email',
            company: 'Company (Optional)',
            message: 'Message',
            productName: 'Product',
            privacy: 'I agree to the collection and use of personal information',
            // Tabs
            description: 'Description',
            specs: 'Specifications',
            applicationsTab: 'Applications',
            certificationsTab: 'Certifications',
            // Others
            reviews: 'Reviews',
            viewDetails: 'View Details'
        }
    },
    cn: {
        name: '中文',
        flag: '🇨🇳',
        labels: {
            // Specs labels
            modelName: '型号',
            voltage: '额定电压',
            capacity: '额定容量',
            energy: '能量',
            cycleLife: '循环寿命',
            dimensions: '尺寸（L×W×H）',
            weight: '重量',
            range: '续航里程（满电）',
            standardCharge: '标准充电',
            continuousDischarge: '持续放电',
            maxDischarge: '最大放电',
            chargeTime: '充电时间',
            cellConfig: '电芯配置',
            cellSpec: '电芯规格',
            caseIP: '外壳 / 防护等级',
            warranty: '保修期',
            maxChargeCurrent: '最大充电电流',
            maxDischargeCurrent: '最大放电电流',
            chargingTemp: '工作温度（充电）',
            dischargingTemp: '工作温度（放电）',
            storageTemp: '储存温度',
            protection: '防护等级',
            // Section titles
            mainSpecs: '主要规格',
            keyFeatures: '核心特点',
            productDescription: '产品详情',
            technicalSpecs: '技术规格',
            applications: '应用领域',
            certificationsTitle: '认证',
            relatedProducts: '相关产品',
            productInquiry: '产品咨询',
            // Buttons
            inquiryButton: '产品咨询',
            catalogButton: '下载目录',
            sendInquiry: '发送咨询',
            // Form
            name: '姓名',
            phone: '电话',
            email: '电子邮件',
            company: '公司名称（可选）',
            message: '咨询内容',
            productName: '咨询产品',
            privacy: '我同意收集和使用个人信息',
            // Tabs
            description: '详细说明',
            specs: '技术规格',
            applicationsTab: '应用领域',
            certificationsTab: '认证',
            // Others
            reviews: '评论',
            viewDetails: '查看详情'
        }
    }
};

// 제품 데이터 - 다국어
const productsData = {
    'roypow-golf-48v': {
        image: 'images/products/골프카트 라이프 PO4 배터리 솔루션.png',
        name: {
            ko: 'RoyPow LifePO4 Battery 48V 105Ah',
            en: 'RoyPow LifePO4 Battery 48V 105Ah',
            cn: 'RoyPow LifePO4 Battery 48V 105Ah'
        },
        category: {
            ko: '골프카트 배터리',
            en: 'Golf Cart Battery',
            cn: '高尔夫球车电池'
        },
        subtitle: {
            ko: '48V 105Ah 골프카트 전용 리튬인산철 배터리',
            en: '48V 105Ah LiFePO4 Battery for Golf Carts',
            cn: '48V 105Ah 高尔夫球车专用磷酸铁锂电池'
        },
        description: {
            ko: 'RoyPow LifePO4 Battery는 YAMAHA 등 주요 골프카트 브랜드에 최적화된 차세대 리튬인산철 배터리입니다. 3500 사이클의 장수명과 10년 설계 수명으로 5년간 70% 이상의 비용을 절감할 수 있습니다. 낮은 온도에서도 안정적인 방전 성능과 멀티 안전장치로 최고의 안전성을 제공합니다.',
            en: 'RoyPow LifePO4 Battery is a next-generation LiFePO4 battery optimized for major golf cart brands like YAMAHA. With 3500 cycle life and 10-year design life, it saves over 70% of costs in 5 years. Provides stable discharge performance even at low temperatures and the highest safety with multi-protection devices.',
            cn: 'RoyPow LifePO4 Battery是针对YAMAHA等主要高尔夫球车品牌优化的下一代磷酸铁锂电池。3500次循环寿命和10年设计寿命，5年内可节省70%以上的成本。即使在低温下也能提供稳定的放电性能，并通过多重保护装置提供最高的安全性。'
        },
        specs: {
            '51V': '51V',
            '105Ah': '105Ah',
            '5.38kWh': '5.38kWh',
            '43.2kg': { ko: '43.2kg (95 lbs)', en: '43.2kg (95 lbs)', cn: '43.2kg (95磅)' },
            '3500회 이상': { ko: '3500회 이상', en: '3500+ Cycles', cn: '3500次以上' }
        },
        detailedSpecs: {
            '모델명': { ko: 'S51105 (48V 시스템)', en: 'S51105 (48V System)', cn: 'S51105（48V系统）' },
            '정격 전압': { ko: '51V', en: '51V', cn: '51V' },
            '정격 용량': { ko: '105Ah', en: '105Ah', cn: '105Ah' },
            '에너지': { ko: '5.38kWh', en: '5.38kWh', cn: '5.38kWh' },
            '사이클 수명': { ko: '3500회 이상', en: '>3500 Cycles', cn: '>3500次' },
            '사이즈 (L×W×H)': { ko: '460×334×247mm', en: '460×334×247mm', cn: '460×334×247mm' },
            '무게': { ko: '43.2kg (95 lbs)', en: '43.2kg (95 lbs)', cn: '43.2kg (95磅)' },
            '주행거리 (완충후)': { ko: '64-81km (40-50 miles)', en: '64-81km (40-50 miles)', cn: '64-81km（40-50英里）' },
            '표준 충전': { ko: '22A', en: '22A', cn: '22A' },
            '지속 방전': { ko: '100A', en: '100A', cn: '100A' },
            '최대 방전': { ko: '200A (10초)', en: '200A (10s)', cn: '200A（10秒）' },
            '충전 시간': { ko: '5.0시간', en: '5.0 hours', cn: '5.0小时' },
            '셀 조합': { ko: '16S1P', en: '16S1P', cn: '16S1P' },
            '셀 규격': { ko: 'LF105 (3.2V 105Ah)', en: 'LF105 (3.2V 105Ah)', cn: 'LF105（3.2V 105Ah）' },
            '케이스 / 방수 등급': { ko: 'Steel / IP67', en: 'Steel / IP67', cn: 'Steel / IP67' }
        },
        features: [
            { 
                icon: 'fas fa-snowflake', 
                title: { ko: '낮은 온도 안정성', en: 'Low Temperature Stability', cn: '低温稳定性' },
                desc: { ko: '낮은 온도에서도 안정적인 방전', en: 'Stable discharge at low temps', cn: '低温下也能稳定放电' }
            },
            { 
                icon: 'fas fa-sync-alt', 
                title: { ko: '3500 사이클 수명', en: '3500 Cycle Life', cn: '3500循环寿命' },
                desc: { ko: '10년 설계 수명, 장기 사용', en: '10-year design life, long-term use', cn: '10年设计寿命，长期使用' }
            },
            { 
                icon: 'fas fa-bolt-lightning', 
                title: { ko: '최소 1시간 고속 충전', en: 'Fast Charging 1hr Min', cn: '最少1小时快速充电' },
                desc: { ko: '언제든 충전 가능, 메모리 효과 없음', en: 'Charge anytime, no memory effect', cn: '随时充电，无记忆效应' }
            },
            { 
                icon: 'fas fa-shield-check', 
                title: { ko: '멀티 안전장치', en: 'Multi-Safety Protection', cn: '多重安全保护' },
                desc: { ko: '높은 열안정성과 화학안정성', en: 'High thermal & chemical stability', cn: '高热稳定性和化学稳定性' }
            },
            { 
                icon: 'fas fa-battery-full', 
                title: { ko: '85% 이상 실사용 용량', en: '85%+ Usable Capacity', cn: '85%以上实用容量' },
                desc: { ko: '높은 부하에서도 정격 용량 유지', en: 'Maintains rated capacity under load', cn: '高负载下保持额定容量' }
            },
            { 
                icon: 'fas fa-coins', 
                title: { ko: '5년간 70% 비용절감', en: '70% Cost Saving in 5yrs', cn: '5年节省70%成本' },
                desc: { ko: '유지보수 없음, 낮은 에너지 손실', en: 'No maintenance, low energy loss', cn: '无需维护，能量损失少' }
            },
            { 
                icon: 'fas fa-leaf', 
                title: { ko: '친환경 무오염', en: 'Eco-Friendly Zero Pollution', cn: '环保零污染' },
                desc: { ko: '환경 오염 없음', en: 'No environmental pollution', cn: '无环境污染' }
            },
            { 
                icon: 'fas fa-wrench', 
                title: { ko: '유지보수 불필요', en: 'Maintenance-Free', cn: '免维护' },
                desc: { ko: '유지보수가 전혀 필요 없음', en: 'Absolutely no maintenance needed', cn: '完全无需维护' }
            }
        ],
        applications: {
            ko: ['YAMAHA 골프카트', 'Club Car 골프카트', 'EZGO 골프카트', '골프장 운영 차량', '리조트 이동 수단', '공항 셔틀 카트'],
            en: ['YAMAHA Golf Carts', 'Club Car Golf Carts', 'EZGO Golf Carts', 'Golf Course Vehicles', 'Resort Transportation', 'Airport Shuttle Carts'],
            cn: ['YAMAHA高尔夫球车', 'Club Car高尔夫球车', 'EZGO高尔夫球车', '高尔夫球场车辆', '度假村交通', '机场穿梭车']
        },
        certifications: [
            { name: 'CE', description: { ko: '유럽 안전 인증', en: 'European Safety Certification', cn: '欧洲安全认证' } },
            { name: 'RoHS', description: { ko: '유해물질 제한 지침', en: 'Restriction of Hazardous Substances', cn: '有害物质限制指令' } },
            { name: 'UN38.3', description: { ko: '리튬배터리 운송 안전 인증', en: 'Lithium Battery Transport Safety', cn: '锂电池运输安全认证' } },
            { name: 'ISO 9001', description: { ko: '품질경영시스템 인증', en: 'Quality Management System', cn: '质量管理体系认证' } },
            { name: 'IP65', description: { ko: '방진·방수 등급', en: 'Dust & Water Resistance', cn: '防尘防水等级' } }
        ],
        icon: 'fas fa-battery-full'
    },
    'roypow-golf-36v': {
        image: 'images/products/골프카트 배터리 38V 105Ah.jpeg',
        name: {
            ko: 'RoyPow 골프카트 배터리 38V 105Ah',
            en: 'RoyPow Golf Cart Battery 38V 105Ah',
            cn: 'RoyPow 高尔夫球车电池 38V 105Ah'
        },
        category: {
            ko: '골프카트 배터리',
            en: 'Golf Cart Battery',
            cn: '高尔夫球车电池'
        },
        subtitle: {
            ko: '38V 105Ah 범용 호환 리튬인산철 배터리 (S38105)',
            en: '38V 105Ah Universal Compatible LiFePO4 Battery (S38105)',
            cn: '38V 105Ah 通用兼容磷酸铁锂电池（S38105）'
        },
        description: {
            ko: 'RoyPow 36V 모델은 다양한 골프카트에 호환되는 범용 배터리입니다. 경량 설계와 높은 에너지 효율로 더 긴 주행거리를 제공합니다.',
            en: 'RoyPow 36V model is a universal battery compatible with various golf carts. Lightweight design and high energy efficiency provide longer driving range.',
            cn: 'RoyPow 36V型号是与各种高尔夫球车兼容的通用电池。轻量化设计和高能效提供更长的行驶里程。'
        },
        specs: {
            '38.4V': '38.4V',
            '105Ah': '105Ah',
            '4,032Wh': '4,032Wh',
            '약 48kg': { ko: '약 48kg', en: 'Approx. 48kg', cn: '约48kg' },
            '5년': { ko: '5년', en: '5 Years', cn: '5年' }
        },
        detailedSpecs: {
            '모델명': { ko: 'S38105 (36V 시스템)', en: 'S38105 (36V System)', cn: 'S38105（36V系统）' },
            '정격 전압': { ko: '38.4V (36V Nominal)', en: '38.4V (36V Nominal)', cn: '38.4V (36V标称)' },
            '정격 용량': { ko: '105Ah', en: '105Ah', cn: '105Ah' },
            '에너지': { ko: '4,032Wh', en: '4,032Wh', cn: '4,032Wh' },
            '표준 충전': { ko: '40A', en: '40A', cn: '40A' },
            '지속 방전': { ko: '250A (연속)', en: '250A (Continuous)', cn: '250A（连续）' },
            '충전 온도': { ko: '0°C ~ 45°C', en: '0°C ~ 45°C', cn: '0°C ~ 45°C' },
            '방전 온도': { ko: '-20°C ~ 60°C', en: '-20°C ~ 60°C', cn: '-20°C ~ 60°C' },
            '보관 온도': { ko: '-20°C ~ 35°C', en: '-20°C ~ 35°C', cn: '-20°C ~ 35°C' },
            '사이즈 (L×W×H)': { ko: '500 × 205 × 220mm', en: '500 × 205 × 220mm', cn: '500 × 205 × 220mm' },
            '무게': { ko: '약 48kg', en: 'Approx. 48kg', cn: '约48kg' },
            '케이스 / 방수 등급': { ko: 'IP65', en: 'IP65', cn: 'IP65' },
            '사이클 수명': { ko: '4000+ 사이클 (80% DOD)', en: '4000+ Cycles (80% DOD)', cn: '4000+ 循环（80% DOD）' }
        },
        features: [
            { 
                icon: 'fas fa-golf-ball', 
                title: { ko: '범용 호환', en: 'Universal Compatible', cn: '通用兼容' },
                desc: { ko: '다양한 골프카트 호환', en: 'Compatible with Various Golf Carts', cn: '兼容各种高尔夫球车' }
            },
            { 
                icon: 'fas fa-wifi', 
                title: { ko: '스마트 모니터링', en: 'Smart Monitoring', cn: '智能监控' },
                desc: { ko: 'BLE/CAN 통신', en: 'BLE/CAN Communication', cn: 'BLE/CAN通信' }
            },
            { 
                icon: 'fas fa-shield-alt', 
                title: { ko: '다중 보호', en: 'Multi Protection', cn: '多重保护' },
                desc: { ko: '10중 안전 시스템', en: '10-Layer Safety System', cn: '10层安全系统' }
            },
            { 
                icon: 'fas fa-sync-alt', 
                title: { ko: '병렬 연결', en: 'Parallel Connection', cn: '并联连接' },
                desc: { ko: '확장 가능 설계', en: 'Expandable Design', cn: '可扩展设计' }
            }
        ],
        applications: {
            ko: ['범용 골프카트', '소형 전동 차량', '전동 스쿠터', '전기 보트', '청소 차량', '경비 순찰 차량'],
            en: ['Universal Golf Carts', 'Small Electric Vehicles', 'Electric Scooters', 'Electric Boats', 'Cleaning Vehicles', 'Security Patrol Vehicles'],
            cn: ['通用高尔夫球车', '小型电动车', '电动滑板车', '电动船', '清洁车辆', '安保巡逻车']
        },
        certifications: [
            { name: 'CE', description: { ko: '유럽 안전 인증', en: 'European Safety Certification', cn: '欧洲安全认证' } },
            { name: 'RoHS', description: { ko: '유해물질 제한 지침', en: 'Restriction of Hazardous Substances', cn: '有害物质限制指令' } },
            { name: 'UN38.3', description: { ko: '리튬배터리 운송 안전 인증', en: 'Lithium Battery Transport Safety', cn: '锂电池运输安全认证' } },
            { name: 'ISO 9001', description: { ko: '품질경영시스템 인증', en: 'Quality Management System', cn: '质量管理体系认证' } },
            { name: 'IP65', description: { ko: '방진·방수 등급', en: 'Dust & Water Resistance', cn: '防尘防水等级' } }
        ],
        icon: 'fas fa-car-battery'
    },
    'roypow-golf-72v': {
        image: 'images/products/리튬이온60V.png',
        name: {
            ko: 'RoyPow 골프카트 배터리 76V 105Ah',
            en: 'RoyPow Golf Cart Battery 76V 105Ah',
            cn: 'RoyPow 高尔夫球车电池 76V 105Ah'
        },
        category: {
            ko: '골프카트 배터리',
            en: 'Golf Cart Battery',
            cn: '高尔夫球车电池'
        },
        subtitle: {
            ko: '76V 105Ah 고성능 배터리 (S72105P)',
            en: '76V 105Ah High Performance Battery (S72105P)',
            cn: '76V 105Ah 高性能电池（S72105P）'
        },
        description: {
            ko: 'RoyPow S72105P 모델은 76V 고성능 시스템의 프리미엄 골프카트를 위한 최상급 배터리입니다. 97-113km의 초장거리 주행이 가능하며, 150A 지속 방전과 315A 최대 방전으로 강력한 출력을 제공합니다.',
            en: 'RoyPow S72105P is the top-tier battery for premium 76V high-performance golf carts. Capable of 97-113km ultra-long range, providing powerful output with 150A continuous discharge and 315A peak discharge.',
            cn: 'RoyPow S72105P是用于76V高性能高档高尔夫球车的顶级电池。可实现97-113公里的超长续航，以150A持续放电和315A峰值放电提供强大输出。'
        },
        specs: {
            '76V': '76V',
            '105Ah': '105Ah',
            '8.06kWh': '8.06kWh',
            '72kg': { ko: '72kg (159 lbs)', en: '72kg (159 lbs)', cn: '72kg (159磅)' },
            '3500회 이상': { ko: '3500회 이상', en: '3500+ Cycles', cn: '3500次以上' }
        },
        detailedSpecs: {
            '모델명': { ko: 'S72105P (72V 시스템)', en: 'S72105P (72V System)', cn: 'S72105P（72V系统）' },
            '정격 전압': { ko: '76V', en: '76V', cn: '76V' },
            '정격 용량': { ko: '105Ah', en: '105Ah', cn: '105Ah' },
            '에너지': { ko: '8.06kWh', en: '8.06kWh', cn: '8.06kWh' },
            '사이클 수명': { ko: '3500회 이상', en: '>3500 Cycles', cn: '>3500次' },
            '사이즈 (L×W×H)': { ko: '740×320×246mm', en: '740×320×246mm', cn: '740×320×246mm' },
            '무게': { ko: '72kg (159 lbs)', en: '72kg (159 lbs)', cn: '72kg (159磅)' },
            '주행거리 (완충후)': { ko: '97-113km (60-70 miles)', en: '97-113km (60-70 miles)', cn: '97-113km（60-70英里）' },
            '표준 충전': { ko: '14A', en: '14A', cn: '14A' },
            '지속 방전': { ko: '150A', en: '150A', cn: '150A' },
            '최대 방전': { ko: '315A (30초)', en: '315A (30s)', cn: '315A（30秒）' },
            '충전 시간': { ko: '7.5시간', en: '7.5 hours', cn: '7.5小时' },
            '셀 조합': { ko: '24S1P', en: '24S1P', cn: '24S1P' },
            '셀 규격': { ko: 'LF105 (3.2V 105Ah)', en: 'LF105 (3.2V 105Ah)', cn: 'LF105（3.2V 105Ah）' },
            '케이스 / 방수 등급': { ko: 'Steel / IP67', en: 'Steel / IP67', cn: 'Steel / IP67' }
        },
        features: [
            { 
                icon: 'fas fa-trophy', 
                title: { ko: '최고급 사양', en: 'Premium Specs', cn: '高端规格' },
                desc: { ko: '프리미엄 골프카트 전용', en: 'For Premium Golf Carts', cn: '高端高尔夫球车专用' }
            },
            { 
                icon: 'fas fa-bolt', 
                title: { ko: '초강력 350A', en: 'Ultra-Powerful 350A', cn: '超强350A' },
                desc: { ko: '최대 350A 출력', en: 'Max 350A Output', cn: '最大350A输出' }
            },
            { 
                icon: 'fas fa-road', 
                title: { ko: '긴 주행거리', en: 'Long Range', cn: '长续航' },
                desc: { ko: '8,064Wh 대용량', en: '8,064Wh Large Capacity', cn: '8,064Wh大容量' }
            },
            { 
                icon: 'fas fa-tachometer-alt', 
                title: { ko: '강력한 가속', en: 'Powerful Acceleration', cn: '强劲加速' },
                desc: { ko: '고전압 고출력', en: 'High Voltage High Power', cn: '高电压高功率' }
            }
        ],
        applications: {
            ko: ['프리미엄 골프카트', '고급 리조트', '대형 골프장', '전시장 전동차', '고성능 전기차', '특수 목적 차량'],
            en: ['Premium Golf Carts', 'Luxury Resorts', 'Large Golf Courses', 'Exhibition Electric Vehicles', 'High-Performance EVs', 'Special Purpose Vehicles'],
            cn: ['高端高尔夫球车', '豪华度假村', '大型高尔夫球场', '展厅电动车', '高性能电动车', '特殊用途车辆']
        },
        certifications: [
            { name: 'CE', description: { ko: '유럽 안전 인증', en: 'European Safety Certification', cn: '欧洲安全认证' } },
            { name: 'RoHS', description: { ko: '유해물질 제한 지침', en: 'Restriction of Hazardous Substances', cn: '有害物质限制指令' } },
            { name: 'UN38.3', description: { ko: '리튬배터리 운송 안전 인증', en: 'Lithium Battery Transport Safety', cn: '锂电池运输安全认证' } },
            { name: 'ISO 9001', description: { ko: '품질경영시스템 인증', en: 'Quality Management System', cn: '质量管理体系认证' } },
            { name: 'IP65', description: { ko: '방진·방수 등급', en: 'Dust & Water Resistance', cn: '防尘防水等级' } }
        ],
        icon: 'fas fa-battery-full'
    },
    'novacell-24v-200ah': {
        image: 'images/products/고소 작업대 배터리.png',
        name: {
            ko: 'NOVACELL 트럭·고소작업대 배터리 24V 200Ah',
            en: 'NOVACELL Truck·Aerial Platform Battery 24V 200Ah',
            cn: 'NOVACELL 卡车·高空作业平台电池 24V 200Ah'
        },
        category: {
            ko: '캠핑카 & 산업용 배터리',
            en: 'RV & Industrial Battery',
            cn: '房车和工业电池'
        },
        subtitle: {
            ko: '24V 200Ah 대용량 리튬인산철 배터리',
            en: '24V 200Ah High-Capacity LiFePO4 Battery',
            cn: '24V 200Ah 大容量磷酸铁锂电池'
        },
        description: {
            ko: 'NOVACELL 24V 200Ah는 캠핑카, 산업용 장비, ESS 시스템에 최적화된 대용량 배터리입니다. 첨단 제조 기술과 안정적인 BMS로 안전하고 오래 사용할 수 있습니다.',
            en: 'NOVACELL 24V 200Ah is a high-capacity battery optimized for RVs, industrial equipment, and ESS systems. Safe and long-lasting with advanced manufacturing technology and stable BMS.',
            cn: 'NOVACELL 24V 200Ah是专为房车、工业设备和ESS系统优化的大容量电池。采用先进的制造技术和稳定的BMS，安全且使用寿命长。'
        },
        specs: {
            '25.6V': '25.6V',
            '200Ah': '200Ah',
            '5,120Wh': '5,120Wh',
            '약 55kg': { ko: '약 55kg', en: 'Approx. 55kg', cn: '约55kg' },
            '5년': { ko: '5년', en: '5 Years', cn: '5年' }
        },
        detailedSpecs: {
            '모델명': { ko: 'NOVACELL-24V-200 (24V 시스템)', en: 'NOVACELL-24V-200 (24V System)', cn: 'NOVACELL-24V-200（24V系统）' },
            '정격 전압': { ko: '25.6V (24V Nominal)', en: '25.6V (24V Nominal)', cn: '25.6V (24V标称)' },
            '정격 용량': { ko: '200Ah', en: '200Ah', cn: '200Ah' },
            '에너지': { ko: '5,120Wh', en: '5,120Wh', cn: '5,120Wh' },
            '표준 충전': { ko: '100A', en: '100A', cn: '100A' },
            '지속 방전': { ko: '200A (연속)', en: '200A (Continuous)', cn: '200A（连续）' },
            '충전 온도': { ko: '0°C ~ 45°C', en: '0°C ~ 45°C', cn: '0°C ~ 45°C' },
            '방전 온도': { ko: '-20°C ~ 60°C', en: '-20°C ~ 60°C', cn: '-20°C ~ 60°C' },
            '보관 온도': { ko: '-20°C ~ 35°C', en: '-20°C ~ 35°C', cn: '-20°C ~ 35°C' },
            '사이즈 (L×W×H)': { ko: '520 × 270 × 240mm', en: '520 × 270 × 240mm', cn: '520 × 270 × 240mm' },
            '무게': { ko: '약 55kg', en: 'Approx. 55kg', cn: '约55kg' },
            '케이스 / 방수 등급': { ko: 'IP67', en: 'IP67', cn: 'IP67' },
            '사이클 수명': { ko: '4500+ 사이클 (80% DOD)', en: '4500+ Cycles (80% DOD)', cn: '4500+ 循环（80% DOD）' }
        },
        features: [
            { 
                icon: 'fas fa-caravan', 
                title: { ko: '캠핑카 최적화', en: 'RV Optimized', cn: '房车优化' },
                desc: { ko: '대용량으로 장시간 사용', en: 'Large Capacity for Extended Use', cn: '大容量长时间使用' }
            },
            { 
                icon: 'fas fa-shield-virus', 
                title: { ko: '안전 BMS', en: 'Safe BMS', cn: '安全BMS' },
                desc: { ko: '과충전/과방전 보호', en: 'Overcharge/Overdischarge Protection', cn: '过充/过放保护' }
            },
            { 
                icon: 'fas fa-award', 
                title: { ko: '5년 보증', en: '5-Year Warranty', cn: '5年保修' },
                desc: { ko: '엄격한 품질 보증', en: 'Strict Quality Guarantee', cn: '严格质量保证' }
            },
            { 
                icon: 'fas fa-plug', 
                title: { ko: '빠른 충전', en: 'Fast Charging', cn: '快速充电' },
                desc: { ko: '2시간 완충 가능', en: '2-Hour Full Charge', cn: '2小时充满' }
            }
        ],
        applications: {
            ko: ['캠핑카 / RV', '트레일러', '태양광 에너지 저장(ESS)', '산업용 장비', '통신 기지국 백업', '무정전 전원 공급(UPS)'],
            en: ['RV / Campers', 'Trailers', 'Solar Energy Storage (ESS)', 'Industrial Equipment', 'Telecom Base Station Backup', 'Uninterruptible Power Supply (UPS)'],
            cn: ['房车', '拖车', '太阳能储能（ESS）', '工业设备', '通信基站备份', '不间断电源（UPS）']
        },
        certifications: [
            { name: 'CE', description: { ko: '유럽 안전 인증', en: 'European Safety Certification', cn: '欧洲安全认证' } },
            { name: 'RoHS', description: { ko: '유해물질 제한 지침', en: 'Restriction of Hazardous Substances', cn: '有害物质限制指令' } },
            { name: 'UN38.3', description: { ko: '리튬배터리 운송 안전 인증', en: 'Lithium Battery Transport Safety', cn: '锂电池运输安全认证' } },
            { name: 'ISO 9001', description: { ko: '품질경영시스템 인증', en: 'Quality Management System', cn: '质量管理体系认证' } },
            { name: 'IP67', description: { ko: '완전 방진·방수 등급', en: 'Complete Dust & Water Resistance', cn: '完全防尘防水等级' } },
            { name: 'FCC', description: { ko: '미국 연방통신위원회 인증', en: 'US Federal Communications Commission', cn: '美国联邦通信委员会认证' } }
        ],
        icon: 'fas fa-battery-full'
    },
    'novacell-12v-100ah': {
        image: 'images/products/DeepCycle.jpeg',
        name: {
            ko: 'NOVACELL 캠핑카·레저용 배터리 12V 100Ah',
            en: 'NOVACELL Camping & Leisure Battery 12V 100Ah',
            cn: 'NOVACELL 露营休闲电池 12V 100Ah'
        },
        category: {
            ko: '소형 배터리',
            en: 'Compact Battery',
            cn: '小型电池'
        },
        subtitle: {
            ko: '12V 100Ah 다목적 리튬인산철 배터리',
            en: '12V 100Ah Multi-Purpose LiFePO4 Battery',
            cn: '12V 100Ah 多用途磷酸铁锂电池'
        },
        description: {
            ko: 'NOVACELL 12V 100Ah는 캠핑, 보트, 소형 전동 장비에 적합한 소형 배터리입니다. 경량 설계로 휴대성이 뛰어나며 안전한 BMS를 탑재했습니다.',
            en: 'NOVACELL 12V 100Ah is a compact battery suitable for camping, boats, and small electric equipment. Lightweight design with excellent portability and safe BMS.',
            cn: 'NOVACELL 12V 100Ah是适合露营、船只和小型电动设备的紧凑型电池。轻量化设计，便携性强，配备安全BMS。'
        },
        specs: {
            '12.8V': '12.8V',
            '100Ah': '100Ah',
            '1,280Wh': '1,280Wh',
            '약 12kg': { ko: '약 12kg', en: 'Approx. 12kg', cn: '约12kg' },
            '3년': { ko: '3년', en: '3 Years', cn: '3年' }
        },
        detailedSpecs: {
            '모델명': { ko: 'NOVACELL-12V-100 (12V 시스템)', en: 'NOVACELL-12V-100 (12V System)', cn: 'NOVACELL-12V-100（12V系统）' },
            '정격 전압': { ko: '12.8V (12V Nominal)', en: '12.8V (12V Nominal)', cn: '12.8V (12V标称)' },
            '정격 용량': { ko: '100Ah', en: '100Ah', cn: '100Ah' },
            '에너지': { ko: '1,280Wh', en: '1,280Wh', cn: '1,280Wh' },
            '표준 충전': { ko: '50A', en: '50A', cn: '50A' },
            '지속 방전': { ko: '100A (연속)', en: '100A (Continuous)', cn: '100A（连续）' },
            '충전 온도': { ko: '0°C ~ 45°C', en: '0°C ~ 45°C', cn: '0°C ~ 45°C' },
            '방전 온도': { ko: '-20°C ~ 60°C', en: '-20°C ~ 60°C', cn: '-20°C ~ 60°C' },
            '보관 온도': { ko: '-20°C ~ 35°C', en: '-20°C ~ 35°C', cn: '-20°C ~ 35°C' },
            '사이즈 (L×W×H)': { ko: '330 × 172 × 220mm', en: '330 × 172 × 220mm', cn: '330 × 172 × 220mm' },
            '무게': { ko: '약 12kg', en: 'Approx. 12kg', cn: '约12kg' },
            '케이스 / 방수 등급': { ko: 'IP65', en: 'IP65', cn: 'IP65' },
            '사이클 수명': { ko: '3000+ 사이클 (80% DOD)', en: '3000+ Cycles (80% DOD)', cn: '3000+ 循环（80% DOD）' }
        },
        features: [
            { 
                icon: 'fas fa-weight', 
                title: { ko: '초경량', en: 'Ultra-Lightweight', cn: '超轻量' },
                desc: { ko: '단 12kg 무게', en: 'Only 12kg Weight', cn: '仅12kg重量' }
            },
            { 
                icon: 'fas fa-campground', 
                title: { ko: '캠핑 최적화', en: 'Camping Optimized', cn: '露营优化' },
                desc: { ko: '휴대용 전원 솔루션', en: 'Portable Power Solution', cn: '便携式电源解决方案' }
            },
            { 
                icon: 'fas fa-anchor', 
                title: { ko: '보트용', en: 'For Boats', cn: '船用' },
                desc: { ko: '방수 등급 IP65', en: 'Water Resistant IP65', cn: '防水等级IP65' }
            },
            { 
                icon: 'fas fa-solar-panel', 
                title: { ko: '태양광 호환', en: 'Solar Compatible', cn: '太阳能兼容' },
                desc: { ko: '소형 ESS 구성', en: 'Small ESS Configuration', cn: '小型ESS配置' }
            }
        ],
        applications: {
            ko: ['소형 캠핑', '전동 보트', '소형 태양광 시스템', '백업 전원', '전동 공구', '이동식 전원'],
            en: ['Small Camping', 'Electric Boats', 'Small Solar Systems', 'Backup Power', 'Power Tools', 'Portable Power'],
            cn: ['小型露营', '电动船', '小型太阳能系统', '备用电源', '电动工具', '便携式电源']
        },
        certifications: [
            { name: 'CE', description: { ko: '유럽 안전 인증', en: 'European Safety Certification', cn: '欧洲安全认证' } },
            { name: 'RoHS', description: { ko: '유해물질 제한 지침', en: 'Restriction of Hazardous Substances', cn: '有害物质限制指令' } },
            { name: 'UN38.3', description: { ko: '리튬배터리 운송 안전 인증', en: 'Lithium Battery Transport Safety', cn: '锂电池运输安全认证' } },
            { name: 'IP65', description: { ko: '방진·방수 등급', en: 'Dust & Water Resistance', cn: '防尘防水等级' } }
        ],
        icon: 'fas fa-battery-three-quarters'
    },
    'novacell-48v-100ah': {
        image: 'images/products/배터리내부 사진.png',
        name: {
            ko: 'NOVACELL 48V 100Ah',
            en: 'NOVACELL 48V 100Ah',
            cn: 'NOVACELL 48V 100Ah'
        },
        category: {
            ko: 'AGV & 산업용 배터리',
            en: 'AGV & Industrial Battery',
            cn: 'AGV和工业电池'
        },
        subtitle: {
            ko: '48V 100Ah 산업용 리튬인산철 배터리',
            en: '48V 100Ah Industrial LiFePO4 Battery',
            cn: '48V 100Ah 工业磷酸铁锂电池'
        },
        description: {
            ko: 'NOVACELL 48V 100Ah는 AGV, 지게차, 산업용 로봇에 최적화된 배터리입니다. 고출력과 긴 수명으로 24시간 가동 환경에 적합합니다.',
            en: 'NOVACELL 48V 100Ah is a battery optimized for AGVs, forklifts, and industrial robots. High output and long lifecycle suitable for 24-hour operation.',
            cn: 'NOVACELL 48V 100Ah是专为AGV、叉车和工业机器人优化的电池。高输出和长寿命，适合24小时运行环境。'
        },
        specs: {
            '51.2V': '51.2V',
            '100Ah': '100Ah',
            '5,120Wh': '5,120Wh',
            '약 50kg': { ko: '약 50kg', en: 'Approx. 50kg', cn: '约50kg' },
            '5년': { ko: '5년', en: '5 Years', cn: '5年' }
        },
        detailedSpecs: {
            '51.2V (48V Nominal)': '51.2V (48V Nominal)',
            '100Ah': '100Ah',
            '5,120Wh': '5,120Wh',
            '50A': '50A',
            '150A (연속)': { ko: '150A (연속)', en: '150A (Continuous)', cn: '150A（连续）' },
            '0°C ~ 45°C': '0°C ~ 45°C',
            '-20°C ~ 60°C': '-20°C ~ 60°C',
            '-20°C ~ 35°C': '-20°C ~ 35°C',
            '480 × 250 × 200mm': '480 × 250 × 200mm',
            '약 50kg': { ko: '약 50kg', en: 'Approx. 50kg', cn: '约50kg' },
            'IP65': 'IP65',
            '5000+ 사이클 (80% DOD)': { ko: '5000+ 사이클 (80% DOD)', en: '5000+ Cycles (80% DOD)', cn: '5000+ 循环（80% DOD）' }
        },
        features: [
            { 
                icon: 'fas fa-robot', 
                title: { ko: 'AGV 최적화', en: 'AGV Optimized', cn: 'AGV优化' },
                desc: { ko: '무인 운반 차량 전용', en: 'For Automated Guided Vehicles', cn: '自动导引车专用' }
            },
            { 
                icon: 'fas fa-industry', 
                title: { ko: '산업용 내구성', en: 'Industrial Durability', cn: '工业耐用性' },
                desc: { ko: '5000+ 사이클 장수명', en: '5000+ Cycle Long Life', cn: '5000+循环长寿命' }
            },
            { 
                icon: 'fas fa-clock', 
                title: { ko: '24시간 가동', en: '24/7 Operation', cn: '24小时运行' },
                desc: { ko: '연속 운전 가능', en: 'Continuous Operation', cn: '连续运行' }
            },
            { 
                icon: 'fas fa-network-wired', 
                title: { ko: 'CAN 통신', en: 'CAN Communication', cn: 'CAN通信' },
                desc: { ko: '실시간 모니터링', en: 'Real-time Monitoring', cn: '实时监控' }
            }
        ],
        applications: {
            ko: ['AGV 무인운반차', '지게차', '산업용 로봇', '자동화 창고', '물류 시스템', '스마트 팩토리'],
            en: ['AGV (Automated Guided Vehicles)', 'Forklifts', 'Industrial Robots', 'Automated Warehouses', 'Logistics Systems', 'Smart Factories'],
            cn: ['AGV自动导引车', '叉车', '工业机器人', '自动化仓库', '物流系统', '智能工厂']
        },
        certifications: [
            { name: 'CE', description: { ko: '유럽 안전 인증', en: 'European Safety Certification', cn: '欧洲安全认证' } },
            { name: 'RoHS', description: { ko: '유해물질 제한 지침', en: 'Restriction of Hazardous Substances', cn: '有害物质限制指令' } },
            { name: 'UN38.3', description: { ko: '리튬배터리 운송 안전 인증', en: 'Lithium Battery Transport Safety', cn: '锂电池运输安全认证' } },
            { name: 'ISO 9001', description: { ko: '품질경영시스템 인증', en: 'Quality Management System', cn: '质量管理体系认证' } },
            { name: 'IP65', description: { ko: '방진·방수 등급', en: 'Dust & Water Resistance', cn: '防尘防水等级' } }
        ],
        icon: 'fas fa-battery-full'
    }
};

// URL 파라미터 추출
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// 다국어 헬퍼 함수
function getText(data) {
    if (typeof data === 'object' && data[currentLanguage]) {
        return data[currentLanguage];
    }
    return data;
}

function getLabel(key) {
    return translations[currentLanguage].labels[key] || key;
}

// 제품 데이터 로드
function loadProductData() {
    const productId = getUrlParameter('id');
    
    const product = productsData[productId];
    
    if (!product) {
        console.error('제품을 찾을 수 없습니다. Product ID:', productId);
        const errorMsg = currentLanguage === 'ko' ? '제품을 찾을 수 없습니다.' :
                        currentLanguage === 'en' ? 'Product not found.' :
                        '找不到产品。';
        alert(errorMsg);
        window.location.href = 'index.html';
        return;
    }
    
    console.log('제품 데이터 로드됨:', productId, product.name, product.image);
    
    
    // Load product image
    if (product.image) {
        const productImg = document.getElementById('productMainImg');
        const placeholder = document.getElementById('imagePlaceholder');
        
        if (productImg && placeholder) {
            // 이미지 로드 전 초기화
            productImg.classList.remove('loaded');
            placeholder.style.display = 'flex';
            
            // 이미지 경로 설정
            productImg.src = product.image;
            productImg.alt = getText(product.name);
            
            // 이미지 로드 성공
            productImg.onload = function() {
                productImg.classList.add('loaded');
                setTimeout(() => {
                    placeholder.style.display = 'none';
                }, 300);
            };
            
            // 이미지 로드 실패
            productImg.onerror = function() {
                console.error('이미지 로드 실패:', product.image);
                // placeholder를 계속 표시
                productImg.style.display = 'none';
            };
        }
    } else {
        console.error('제품 이미지 경로가 없습니다.');
    }
    
    // Update page title
    document.title = `${getText(product.name)} | NOVA ENERGY`;
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('product-breadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = getText(product.name);
    }
    
    // Update product info
    const category = document.getElementById('product-category');
    if (category) {
        category.textContent = getText(product.category);
    }
    
    const title = document.getElementById('product-title');
    if (title) {
        title.textContent = getText(product.name);
    }
    
    const subtitle = document.getElementById('product-subtitle');
    if (subtitle) {
        subtitle.textContent = getText(product.subtitle);
    }
    
    // Update specs
    const specsLabels = [
        { key: 'voltage', value: Object.keys(product.specs)[0] },
        { key: 'capacity', value: Object.keys(product.specs)[1] },
        { key: 'energy', value: Object.keys(product.specs)[2] },
        { key: 'weight', value: Object.keys(product.specs)[3] },
        { key: 'warranty', value: Object.keys(product.specs)[4] }
    ];
    
    const specsList = document.getElementById('product-specs-list');
    if (specsList) {
        specsList.innerHTML = specsLabels.map(spec => `
            <li>
                <span class="spec-label">${getLabel(spec.key)}</span>
                <span class="spec-value">${getText(product.specs[spec.value])}</span>
            </li>
        `).join('');
    }
    
    // Update features
    const featuresGrid = document.getElementById('product-features-grid');
    if (featuresGrid) {
        featuresGrid.innerHTML = product.features.map(feature => `
            <div class="feature-box">
                <i class="${feature.icon}"></i>
                <h4>${getText(feature.title)}</h4>
                <p>${getText(feature.desc)}</p>
            </div>
        `).join('');
    }
    
    // Update description tab
    const descriptionDiv = document.getElementById('product-description');
    if (descriptionDiv) {
        descriptionDiv.innerHTML = `<p>${getText(product.description)}</p>`;
    }
    
    // Update technical specs tab - map Korean keys to translation keys
    const specKeyMapping = {
        '모델명': 'modelName',
        '정격 전압': 'voltage',
        '정격 용량': 'capacity',
        '에너지': 'energy',
        '사이클 수명': 'cycleLife',
        '사이즈 (L×W×H)': 'dimensions',
        '무게': 'weight',
        '주행거리 (완충후)': 'range',
        '표준 충전': 'standardCharge',
        '지속 방전': 'continuousDischarge',
        '최대 방전': 'maxDischarge',
        '충전 시간': 'chargeTime',
        '셀 조합': 'cellConfig',
        '셀 규격': 'cellSpec',
        '케이스 / IP': 'caseIP',
        '케이스 / 방수 등급': 'caseIP',
        '충전 온도': 'chargingTemp',
        '방전 온도': 'dischargingTemp',
        '보관 온도': 'storageTemp'
    };
    
    const techSpecsTable = document.getElementById('technical-specs-table');
    if (techSpecsTable && product.detailedSpecs) {
        techSpecsTable.innerHTML = Object.entries(product.detailedSpecs).map(([key, value]) => {
            const labelKey = specKeyMapping[key] || key;
            const translatedLabel = getLabel(labelKey) || key;
            return `
                <tr>
                    <td>${translatedLabel}</td>
                    <td>${getText(value)}</td>
                </tr>
            `;
        }).join('');
    }
    
    // Update applications
    const applicationsList = getText(product.applications);
    const applicationsListDiv = document.getElementById('applications-list');
    if (applicationsListDiv) {
        applicationsListDiv.innerHTML = applicationsList.map(app => `
            <li><i class="fas fa-check"></i> ${app}</li>
        `).join('');
    }
    
    // Update certifications
    const certificationsGrid = document.getElementById('certifications-grid');
    if (certificationsGrid) {
        certificationsGrid.innerHTML = product.certifications.map(cert => `
            <div class="certification-card">
                <div class="cert-badge">${cert.name}</div>
                <p>${getText(cert.description)}</p>
            </div>
        `).join('');
    }
    
    // Pre-fill inquiry form
    const inquiryProductName = document.getElementById('inquiry-product-name');
    if (inquiryProductName) {
        inquiryProductName.value = getText(product.name);
    }
    
}

// 언어 전환
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update current language display
    const currentLangBtn = document.getElementById('currentLang');
    if (currentLangBtn) {
        currentLangBtn.innerHTML = `<i class="fas fa-globe"></i> ${translations[lang].name}`;
    }
    
    // Update all translatable elements
    document.querySelectorAll('[data-ko]').forEach(element => {
        const translatedText = element.getAttribute(`data-${lang}`);
        if (translatedText) {
            if (translatedText.includes('<')) {
                element.innerHTML = translatedText;
            } else {
                element.textContent = translatedText;
            }
        }
    });
    
    // Update placeholder texts
    document.querySelectorAll('[data-placeholder-ko]').forEach(element => {
        const placeholder = element.getAttribute(`data-placeholder-${lang}`);
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach((btn, index) => {
        const tabNames = ['description', 'specs', 'applicationsTab', 'certificationsTab'];
        btn.textContent = getLabel(tabNames[index]);
    });
    
    // Update section titles
    const mainSpecsTitle = document.querySelector('.product-specs h3');
    if (mainSpecsTitle) mainSpecsTitle.textContent = getLabel('mainSpecs');
    
    const keyFeaturesTitle = document.querySelector('.product-features-box h3');
    if (keyFeaturesTitle) keyFeaturesTitle.textContent = getLabel('keyFeatures');
    
    // Update buttons
    const inquiryBtn = document.querySelector('.product-actions .btn-primary');
    if (inquiryBtn) {
        inquiryBtn.innerHTML = `<i class="fas fa-envelope"></i> ${getLabel('inquiryButton')}`;
    }
    
    const catalogBtn = document.querySelector('.product-actions .btn-outline');
    if (catalogBtn) {
        catalogBtn.innerHTML = `<i class="fas fa-download"></i> ${getLabel('catalogButton')}`;
    }
    
    // Reload product data with new language
    loadProductData();
    
    // Store preference
    localStorage.setItem('preferred-language', lang);
}

// 카탈로그 다운로드
function downloadCatalog() {
    alert(currentLanguage === 'ko' ? '카탈로그 다운로드가 시작됩니다.' : 
          currentLanguage === 'en' ? 'Catalog download will start.' : 
          '目录下载将开始。');
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && savedLang !== 'ko') {
        currentLanguage = savedLang;
        const currentLangBtn = document.getElementById('currentLang');
        if (currentLangBtn) {
            currentLangBtn.innerHTML = `<i class="fas fa-globe"></i> ${translations[savedLang].name}`;
        }
    }
    
    loadProductData();
    
    // ===========================
    // Tab Switching
    // ===========================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
    
    // ===========================
    // Language Switching
    // ===========================
    const languageLinks = document.querySelectorAll('.language-menu a');
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang') || e.target.closest('a').getAttribute('data-lang');
            
            if (lang && lang !== currentLanguage) {
                switchLanguage(lang);
            }
        });
    });
    
    // Initialize AOS
    AOS.init({
        duration: 400, // 더 빠른 애니메이션
        once: true, // 한 번만 실행
        offset: 120 // 더 빨리 시작
    });
    
    // ===========================
    // Smooth Scroll for Links
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#" or empty
            if (!href || href === '#') {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            
            try {
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                console.error('Invalid selector:', href);
            }
        });
    });
    
    // ===========================
    // Scroll to Top Button
    // ===========================
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===========================
    // Hamburger menu
    // ===========================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // ===========================
    // Product Inquiry Form with EmailJS
    // ===========================
    const productInquiryForm = document.getElementById('productInquiryForm');
    
    if (productInquiryForm) {
        // Auto-fill product name from current product
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const productHiddenField = document.getElementById('inquiry-product-name');
        
        if (productId && productsData[productId] && productHiddenField) {
            const productName = getText(productsData[productId].name);
            productHiddenField.value = productName;
        }
        
        // Handle form submission
        productInquiryForm.addEventListener('submit', (e) => {
            console.log('===== 제품 문의 폼 제출 시작 =====');
            e.preventDefault();
            
            const privacyCheckbox = document.getElementById('inquiry-privacy');
            console.log('1. 체크박스 요소:', privacyCheckbox);
            console.log('2. 체크 상태:', privacyCheckbox ? privacyCheckbox.checked : 'null');
            
            const privacy = privacyCheckbox ? privacyCheckbox.checked : false;
            console.log('3. privacy 변수:', privacy);
        
            if (!privacy) {
                console.log('4. 체크박스 미체크 - 알림 표시');
                const privacyMsg = currentLanguage === 'ko' ? '개인정보 수집 및 이용에 동의해주세요.' :
                                  currentLanguage === 'en' ? 'Please agree to the collection and use of personal information.' :
                                  '请同意收集和使用个人信息。';
                alert(privacyMsg);
                return;
            }
            
            console.log('5. 체크박스 체크됨 - EmailJS 전송 시작');
            
            // Show loading message
            const submitBtn = productInquiryForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.querySelector('.btn-text').textContent;
            submitBtn.querySelector('.btn-text').textContent = currentLanguage === 'ko' ? '전송 중...' :
                                                               currentLanguage === 'en' ? 'Sending...' :
                                                               '发送中...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            console.log('6. EmailJS 타입:', typeof emailjs);
            if (typeof emailjs !== 'undefined') {
                console.log('7. EmailJS 전송 시도 중...');
                emailjs.sendForm('service_wy0bc3h', 'template_synj1s4', productInquiryForm)
                    .then(function(response) {
                        console.log('8. EmailJS 전송 성공!', response);
                        
                        const successMsg = currentLanguage === 'ko' ? '제품 문의가 성공적으로 전송되었습니다!\n빠른 시일 내에 연락드리겠습니다.' :
                                          currentLanguage === 'en' ? 'Your product inquiry has been sent successfully!\nWe will contact you soon.' :
                                          '产品咨询已成功发送！\n我们将尽快与您联系。';
                        alert(successMsg);
                        
                        // Reset form (but keep product name)
                        const productName = productHiddenField.value;
                        productInquiryForm.reset();
                        productHiddenField.value = productName;
                        
                    }, function(error) {
                        console.error('9. EmailJS 전송 실패:', error);
                        
                        const errorMsg = currentLanguage === 'ko' ? '전송 중 오류가 발생했습니다.\n다시 시도해주세요.' :
                                        currentLanguage === 'en' ? 'An error occurred while sending.\nPlease try again.' :
                                        '发送时出错。\n请重试。';
                        alert(errorMsg);
                    })
                    .finally(function() {
                        // Restore button
                        submitBtn.querySelector('.btn-text').textContent = originalBtnText;
                        submitBtn.disabled = false;
                    });
            } else {
                // EmailJS not loaded
                alert('EmailJS is not loaded. Please check your internet connection.');
                submitBtn.querySelector('.btn-text').textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});

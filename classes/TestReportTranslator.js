export default class TestReportTranslator{
    constructor(){
        this.translate = this.translate.bind(this);
    }

    #translation_map = {
        "INDEPENDENT_TESTS": "双方独立测试",
        "MBTI": "MBTI",
        "MALE": "男方",
        "FEMALE": "女方",
        "EvI": "EvI",
        "FvT": "FvT",
        "JvP": "JvP",
        "NvS": "NvS",
        "answers": "具体选项",
        "score": "得分",
        "trend": "倾向",
        "Introversion": "Introversion",
        "Thinking": "Thinking",
        "Perceiving": "Perceiving",
        "Sensing": "Sensing",
        "PERSONAL_INFO": "个人信息",
        "FAMILY_ADAPTABILITY_TEST": "家庭适应性测试",
        "Original Family": "原生家庭",
        "Ideal Relationship": "理想关系",
        "Closeness": "答案相似性",
        "Elasticity": "相互包容性",
        "LIFE_PRESSURE_ANALYSIS": "生活压力分析",
        "HAPPY_MARRIAGE_ASSESSMENT": "幸福婚姻测试",
        "DEPENDENT_TESTS": "双方关联测试",
        "subcategory": "子类别",
        "consistency": "契合度",
        "satisfaction": "满意度"
    };
    
    translate(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(this.translate);
        }

        const translated_report = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const translated_key = this.#translation_map[key] || key;
                translated_report[translated_key] = this.translate(obj[key]);
            }
        }

        return translated_report;
    }
    
}
 // Tailwind 配置 - 精简并统一的配色方案
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1e88e5',        // 主蓝
                primaryLight: '#64b5f6',   // 浅蓝
                primaryLighter: '#bbdefb', // 更浅蓝
                primaryDark: '#0d47a1',    // 深蓝
                accent: '#ff9800',         // 橙色（强调色）
                accentLight: '#ffb74d',    // 浅橙色
                accentDark: '#f57c00',     // 深橙色
                
                // 图表专用配色 - 统一的蓝色系
                chartBlue1: '#1e88e5',
                chartBlue2: '#42a5f5',
                chartBlue3: '#64b5f6',
                chartBlue4: '#90caf9',
                chartBlue5: '#bbdefb',
                chartBlue6: '#e3f2fd',
                
                // 创新项目方向配色
                ai: '#1e88e5',        // AI方向用主蓝
                lowAltitude: '#42a5f5',   // 低空方向用蓝2
                informatization: '#64b5f6', // 信息化方向用蓝3
                
                // 人才梯队配色
                senior: '#1e88e5',        // 高级专家
                intermediate: '#64b5f6',  // 中级专家
                junior: '#bbdefb',        // 后备专家
                
                // 性别配色
                male: '#1e88e5',          // 男性
                female: '#ff9800',        // 女性（用强调色区分）
                
                // 学历配色
                doctor: '#0d47a1',        // 博士
                master: '#1e88e5',        // 硕士
                bachelor: '#64b5f6',      // 本科
                
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827'
                }
            },
            fontFamily: {
                sans: ['"Microsoft YaHei"', '"PingFang SC"', 'system-ui', '-apple-system', 'sans-serif'],
                heading: ['"Microsoft YaHei"', '"PingFang SC"', 'Segoe UI', 'Roboto', 'sans-serif']
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }]
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'hover': '0 10px 40px rgba(0, 0, 0, 0.12)',
                'elevated': '0 20px 60px rgba(0, 0, 0, 0.15)'
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem'
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'gradient': 'gradient 3s ease infinite'
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' }
                }
            }
        }
    }
};

// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // 如果是移动端，点击后关闭菜单
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // 监听滚动，添加动画效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.analysis-card, .chart-container, .stats-card').forEach(element => {
        observer.observe(element);
    });

    // 初始化第一个分院为激活状态
    const techBtn = document.querySelector('.branch-btn');
    if (techBtn) {
        techBtn.classList.add('active-branch', 'bg-primary', 'text-white');
        techBtn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    }
    
    // 为所有分院按钮添加样式类
    document.querySelectorAll('.branch-btn').forEach(btn => {
        if (!btn.classList.contains('active-branch')) {
            btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        }
    });
});

// 分院详情切换功能
function showBranchDetail(branchId) {
    // 移除所有按钮的active状态
    document.querySelectorAll('.branch-btn').forEach(btn => {
        btn.classList.remove('active-branch', 'bg-primary', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    });
    
    // 为当前点击的按钮添加active状态
    event.target.classList.add('active-branch', 'bg-primary', 'text-white');
    event.target.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    
    // 隐藏所有分院详情
    document.querySelectorAll('.branch-detail').forEach(detail => {
        detail.classList.remove('active');
        detail.classList.add('hidden');
    });
    
    // 显示当前分院详情
    const detailElement = document.getElementById(`${branchId}-detail`);
    if (detailElement) {
        detailElement.classList.remove('hidden');
        detailElement.classList.add('active');
        
        // 添加动画效果
        setTimeout(() => {
            detailElement.style.opacity = 1;
            detailElement.style.transform = 'translateY(0)';
        }, 10);
    }
}

// 图表初始化函数
// 图表初始化函数 - 更新所有图表的颜色配置
function initCharts() {
    console.log('开始初始化图表...');
    
    // 检查ECharts是否加载
    if (typeof echarts === 'undefined') {
        console.error('ECharts未加载成功');
        alert('图表库加载失败，请刷新页面重试');
        return;
    }
    
    console.log('ECharts版本:', echarts.version);
    
    // 统一的颜色配置
    const chartColors = {
        primary: '#1e88e5',
        primaryLight: '#64b5f6',
        primaryLighter: '#bbdefb',
        primaryDark: '#0d47a1',
        accent: '#ff9800',
        accentLight: '#ffb74d',
        accentDark: '#f57c00'
    };
    
   // 初始化综合排名图表
try {
    var rankingChartDom = document.getElementById('rankingChart');
    if (rankingChartDom) {
        var rankingChart = echarts.init(rankingChartDom);
        
        // 原始数据
        var categories = ['测绘一院', '滨海院', '测绘三院', '测绘四院', '基础测绘院', '测绘七院', '测绘八院', '海洋院', '调查监测院', '信息工程院', '技术研发中心'];
        
        var seriesData = {
            '科技成果': [3.2, 3.3, 19.7, 6.6, 4.6, 6.7, 5.5, 9.9, 13.1, 14.1, 31.0],
            '科技质量': [9.2, 12.8, 8.6, 12.3, 5.0, 12.2, 4.0, 11.0, 0, 10.5, 14],
            '人才培养': [12.3, 0.7, 16.4, 7.3, 6.6, 4.4, 7.1, 0, 8.2, 17.1, 13.3],
            '创新能力': [3, 6.6, 8.5, 4.1, 7.7, 2.0, 0.4, 7.8, 10.5, 12.8, 11]
        };
        
        // 计算每个分院的总分
        var totalScores = [];
        for (var i = 0; i < categories.length; i++) {
            var total = 0;
            total += seriesData['科技成果'][i];
            total += seriesData['科技质量'][i];
            total += seriesData['人才培养'][i];
            total += seriesData['创新能力'][i];
            totalScores.push({
                name: categories[i],
                total: total,
                index: i
            });
        }
        
        // 按照总分从大到小排序
        totalScores.sort(function(a, b) {
            return b.total - a.total;
        });
        
        // 获取排序后的分院名称
        var sortedCategories = totalScores.map(function(item) {
            return item.name;
        });
        
        // 重新组织数据，按照排序后的顺序
        var sortedSeriesData = {};
        for (var seriesName in seriesData) {
            sortedSeriesData[seriesName] = [];
            for (var j = 0; j < totalScores.length; j++) {
                var originalIndex = totalScores[j].index;
                sortedSeriesData[seriesName].push(seriesData[seriesName][originalIndex]);
            }
        }
        
        // 更新tooltip显示总分
        var sortedTotals = [];
        for (var k = 0; k < totalScores.length; k++) {
            sortedTotals.push(totalScores[k].total.toFixed(1));
        }
        
        var rankingOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params) {
                    var categoryIndex = params[0].dataIndex;
                    var branchName = sortedCategories[categoryIndex];
                    var total = sortedTotals[categoryIndex];
                    
                    var result = '<div style="font-weight: bold; margin-bottom: 8px; color: #1e293b;">' + branchName + '</div>';
                    
                    for (var i = 0; i < params.length; i++) {
                        result += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">' +
                                 '<span>' + params[i].marker + params[i].seriesName + ': </span>' +
                                 '<span style="font-weight: bold;">' + params[i].value + '</span>' +
                                 '</div>';
                    }
                    
                    result += '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e5e7eb;">' +
                             '<div style="display: flex; justify-content: space-between; align-items: center;">' +
                             '<span style="font-weight: bold;">总分: </span>' +
                             '<span style="font-weight: bold; color: #2563eb;">' + total + '</span>' +
                             '</div>' +
                             '<div style="color: #9ca3af; font-size: 11px; margin-top: 4px; text-align: right;">' +
                             '排名: 第' + (categoryIndex + 1) + '名' +
                             '</div>' +
                             '</div>';
                    
                    return result;
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
            },
            legend: {
                data: ['科技成果', '科技质量', '人才培养', '创新能力'],
                bottom: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#6b7280'
                },
                itemGap: 20,
                itemWidth: 12,
                itemHeight: 12
            },
            grid: {
                left: '1%',
                right: '1%',
                bottom: '10%',
                top: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    fontSize: 12,
                    color: '#6b7280'
                }
            },
            yAxis: {
                type: 'category',
                data: sortedCategories, // 使用排序后的分院名称
                axisLabel: {
                    interval: 0,
                    fontSize: 12,
                    color: '#6b7280'
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            series: [
                {
                    name: '科技成果',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSeriesData['科技成果'], // 使用排序后的数据
                    itemStyle: {
                        color: '#1565c0',
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(30, 136, 229, 0.3)'
                        }
                    }
                },
                {
                    name: '科技质量',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSeriesData['科技质量'], // 使用排序后的数据
                    itemStyle: {
                        color: '#2196f3',
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(100, 181, 246, 0.3)'
                        }
                    }
                },
                {
                    name: '人才培养',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSeriesData['人才培养'], // 使用排序后的数据
                    itemStyle: {
                        color: '#64b5f6',
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(187, 222, 251, 0.3)'
                        }
                    }
                },
                {
                    name: '创新能力',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSeriesData['创新能力'], // 使用排序后的数据
                    itemStyle: {
                        color: '#bbdefb',
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(255, 152, 0, 0.3)'
                        }
                    }
                }
            ]
        };
        
        rankingChart.setOption(rankingOption);
        console.log('综合排名图表初始化成功，已按总分从大到小排序');
        
        // 在控制台显示排序结果
        console.log('各分院总分排序结果：');
        totalScores.forEach((item, index) => {
            console.log((index + 1) + '. ' + item.name + ': ' + item.total.toFixed(1) + '分');
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            rankingChart.resize();
        });
    }
} catch (error) {
    console.error('综合排名图表初始化失败:', error);
}
    
    // 初始化科研项目承担能力图表 - 堆叠柱状图+折线双Y轴版本
try {
    var projectCapabilityChartDom = document.getElementById('projectCapabilityChart');
    if (projectCapabilityChartDom) {
        var projectCapabilityChart = echarts.init(projectCapabilityChartDom);
        
        // 原始数据：包含项目级别和经费信息
        var projectData = [
            {
                name: '技术研发中心',
                projects: {
                    yuannei: 7,     // 院内项目数
                    yuanwai: 0      // 院外项目数
                },
                totalFunds: 380,     // 总经费（万元）
                avgFunds: 54.3       // 平均每个项目经费
            },
            {
                name: '信息工程院',
                projects: {
                    yuannei: 1,
                    yuanwai: 1
                },
                totalFunds: 70,
                avgFunds: 35
            },
            {
                name: '调查监测院',
                projects: {
                    yuannei: 4,
                    yuanwai: 0
                },
                totalFunds: 98.8,
                avgFunds: 24.7
            },
            {
                name: '海洋院',
                projects: {
                    yuannei: 1,
                    yuanwai: 1
                },
                totalFunds: 15.5,
                avgFunds: 7.8
            },
            {
                name: '测绘八院',
                projects: {
                    yuannei: 1,
                    yuanwai: 1
                },
                totalFunds: 30,
                avgFunds: 15
            },
            {
                name: '测绘七院',
                projects: {
                    yuannei: 2,
                    yuanwai: 0
                },
                totalFunds: 11.5,
                avgFunds: 5.8
            },
            {
                name: '基础测绘院',
                projects: {
                    yuannei: 1,
                    yuanwai: 0
                },
                totalFunds: 3.5,
                avgFunds: 3.5
            },
            {
                name: '测绘四院',
                projects: {
                    yuannei: 1,
                    yuanwai: 1
                },
                totalFunds: 45,
                avgFunds: 22.5
            },
            {
                name: '测绘三院',
                projects: {
                    yuannei: 6,
                    yuanwai: 1
                },
                totalFunds: 167,
                avgFunds: 23.9
            },
            {
                name: '滨海院',
                projects: {
                    yuannei: 0,
                    yuanwai: 0
                },
                totalFunds: 0,
                avgFunds: 0
            },
            {
                name: '测绘一院',
                projects: {
                    yuannei: 0,
                    yuanwai: 0
                },
                totalFunds: 0,
                avgFunds: 0
            }
        ];
        
        // 按照项目总数从大到小排序
        var sortedProjectData = projectData.sort(function(a, b) {
            var totalA = a.projects.yuannei + a.projects.yuanwai;
            var totalB = b.projects.yuannei + b.projects.yuanwai;
            return totalB - totalA; // 从大到小排序
        });
        
        // 提取排序后的数据用于图表
        var branches = sortedProjectData.map(item => item.name);
        var yuanneiData = sortedProjectData.map(item => item.projects.yuannei);
        var yuanwaiData = sortedProjectData.map(item => item.projects.yuanwai);
        var totalFundsData = sortedProjectData.map(item => item.totalFunds);
        
        // 计算每个分院的总项目数（用于百分比计算）
        var totalProjects = sortedProjectData.map(item => 
            item.projects.yuannei + item.projects.yuanwai
        );
        
        var projectCapabilityOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var branchIndex = params[0].dataIndex;
                    var branchData = sortedProjectData[branchIndex];
                    
                    // 计算各级别项目比例
                    var total = totalProjects[branchIndex];
                    var yuanneiRatio = total > 0 ? (branchData.projects.yuannei / total * 100).toFixed(1) : 0;
                    var yuanwaiRatio = total > 0 ? (branchData.projects.yuanwai / total * 100).toFixed(1) : 0;
                    
                    var result = `
                        <div style="margin-bottom: 8px; font-weight: bold; font-size: 14px;">${branchData.name}</div>
                        <div style="border-bottom: 1px solid #e5e7eb; margin-bottom: 8px; padding-bottom: 8px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span>总项目数:</span>
                                <span><b>${total}项</b></span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>总经费:</span>
                                <span style="color: #f59e0b; font-weight: bold;">${branchData.totalFunds}万元</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>平均项目经费:</span>
                                <span>${branchData.avgFunds}万元/项</span>
                            </div>
                        </div>
                        <div style="font-weight: 500; margin-bottom: 4px;">项目级别分布:</div>
                    `;
                    
                    // 项目级别详情
                    result += `
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
                            <div style="display: flex; align-items: center;">
                                <div style="width: 10px; height: 10px; background: #0d47a1; border-radius: 2px; margin-right: 6px;"></div>
                                <span>院内项目:</span>
                            </div>
                            <span><b>${branchData.projects.yuannei}项</b> (${yuanneiRatio}%)</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center;">
                                <div style="width: 10px; height: 10px; background: #1e88e5; border-radius: 2px; margin-right: 6px;"></div>
                                <span>院外项目:</span>
                            </div>
                            <span><b>${branchData.projects.yuanwai}项</b> (${yuanwaiRatio}%)</span>
                        </div>
                    `;
                    
                    return result;
                }
            },
            legend: {
                data: [
                    { name: '院内项目', textStyle: { color: '#6b7280' } },
                    { name: '院外项目', textStyle: { color: '#6b7280' } },
                    { name: '总经费', textStyle: { color: '#f59e0b', fontWeight: 'bold' } }
                ],
                bottom: 0,
                textStyle: {
                    fontSize: 12
                },
                itemWidth: 12,
                itemHeight: 12
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '15%',
                top: '10%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: branches,
                    axisLabel: {
                        interval: 0,
                        rotate: 45,
                        fontSize: 12,
                        color: '#6b7280'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e5e7eb'
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                // 左侧Y轴：项目数量
                {
                    type: 'value',
                    name: '项目数量（项）',
                    nameLocation: 'end',
                    nameGap: 25,
                    nameTextStyle: {
                        color: '#6b7280',
                        fontSize: 12
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f3f4f6',
                            type: 'dashed'
                        }
                    },
                     axisLabel: {
                    formatter: '{value}',
                    show: true,  // 确保显示
                    color: '#6b7280',
                    fontSize: 12,
                    margin: 8
                },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#e5e7eb'
                        }
                    }
                },
                // 右侧Y轴：总经费（设置最小值和最大值）
                {
                    type: 'value',
                    name: '总经费（万元）',
                    min: 3,  // 设置最小值为3
                    max: 500, // 设置最大值为500
                    nameLocation: 'end',
                    position: 'right',
                    offset: 0,
                    nameTextStyle: {
                        color: '#f59e0b',
                        fontSize: 12,
                        fontWeight: 'bold'
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#f59e0b'
                        }
                    },
                    axisLabel: {
                        color: '#f59e0b',
                        fontWeight: 'bold',
                        margin: 8,
                        formatter: function(value) {
                            // 显示为整数
                            return Math.round(value);
                        }
                    },
                    // 设置合适的刻度间隔
                    interval: 100
                }
            ],
            series: [
                // 堆叠柱状图 - 院内项目
                {
                    name: '院内项目',
                    type: 'bar',
                    stack: 'projectLevel',
                    data: yuanneiData,
                    itemStyle: {
                        color:  '#1565c0',
                        borderRadius: [4, 4, 0, 0]
                    },
                    label: {
                        show: false,
                        position: 'inside',
                        formatter: '{c}',
                        color: '#ffffff',
                        fontSize: 11
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(13, 71, 161, 0.3)'
                        }
                    }
                },
                // 堆叠柱状图 - 院外项目
                {
                    name: '院外项目',
                    type: 'bar',
                    stack: 'projectLevel',
                    data: yuanwaiData,
                    itemStyle: {
                        color:  '#2196f3',
                        borderRadius: [0, 0, 4, 4]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function(params) {
                            var total = totalProjects[params.dataIndex];
                            return total + '项';
                        },
                        color: '#374151',
                        fontSize: 11,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(30, 136, 229, 0.3)'
                        }
                    }
                },
                // 折线图 - 总经费（使用右侧Y轴，放在柱状图上方）
                {
                    name: '总经费',
                    type: 'line',
                    yAxisIndex: 1,
                    data: totalFundsData,
                    symbol: 'circle',
                    symbolSize: 8,
                    lineStyle: {
                        color: '#f59e0b',
                        width: 3,
                        type: 'solid'
                    },
                    itemStyle: {
                        color: '#f59e0b',
                        borderColor: '#ffffff',
                        borderWidth: 2
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}万',
                        color: '#f59e0b',
                        fontSize: 11,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderColor: '#f59e0b',
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: [4, 6],
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 4
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontWeight: 'bold',
                            fontSize: 12
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(245, 158, 11, 0.3)'
                        }
                    }
                }
            ]
        };
        
        projectCapabilityChart.setOption(projectCapabilityOption);
        console.log('科研项目承担能力图表（堆叠柱状图+折线）初始化成功，总经费Y轴范围设置为3-500');
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            projectCapabilityChart.resize();
        });
    }
} catch (error) {
    console.error('科研项目承担能力图表初始化失败:', error);
}
    
    // 初始化科技成果产出图表（雷达图） - 展示各维度数量
try {
    var techOutputChartDom = document.getElementById('techOutputChart');
    if (techOutputChartDom) {
        var techOutputChart = echarts.init(techOutputChartDom);
        
        // 统一的颜色配置
        const radarColors = [
            '#e3f2fd',         // 技术研发中心 - 主蓝
            '#bbdefb',    // 信息工程院 - 浅蓝
            '#90caf9',  // 调查监测院 - 更浅蓝
            '#64b5f6',          // 海洋院 - 橙色
            '#42a5f5',                   // 测绘八院 - 蓝色4
            '#2196f3',                   // 测绘七院 - 蓝色5
            '#1e88e5',                   // 基础测绘院 - 蓝色6
            '#1976d2',                   // 测绘四院 - 蓝色7
            '#1565c0',                   // 测绘三院 - 深蓝
            '#0d47a1',                   // 滨海院 - 中蓝
            '#0a3880'                    // 测绘一院 - 蓝色3
        ];
        
        // 各分院在各维度的实际数量数据
        var techOutputData = [
            {
                name: '技术研发中心',
                awards: 3,      // 获奖数量
                patents: 18,      // 专利数量
                papers: 6,       // 论文数量
                standards: 7,    // 标准数量
                softwares: 15,    // 软著数量
                projects: 7      // 科研项目数量
            },
            {
                name: '测绘三院',
                awards: 2,
                patents: 1,
                papers: 3,
                standards: 5,
                softwares: 5,
                projects: 7
            },
            {
                name: '调查监测院',
                awards: 0,
                patents: 2,
                papers: 7,
                standards: 3,
                softwares: 4,
                projects: 4
            },
            {
                name: '测绘七院',
                awards: 0,
                patents: 0,
                papers: 1,
                standards: 4,
                softwares: 16,
                projects: 2
            },
            {
                name: '信息工程院',
                awards: 1,
                patents: 1,
                papers: 4,
                standards: 2,
                softwares: 18,
                projects: 2
            },
            {
                name: '海洋院',
                awards: 2,
                patents: 0,
                papers: 0,
                standards: 1,
                softwares: 0,
                projects: 2
            },
            {
                name: '测绘八院',
                awards: 0,
                patents: 0,
                papers: 3,
                standards: 0,
                softwares: 2,
                projects: 2
            },
            {
                name: '测绘四院',
                awards: 0,
                patents: 1,
                papers: 0,
                standards: 2,
                softwares: 2,
                projects: 2
            },
            {
                name: '基础测绘院',
                awards: 0,
                patents: 0,
                papers: 1,
                standards: 1,
                softwares: 3,
                projects: 1
            },
            {
                name: '滨海院',
                awards: 0,
                patents: 0,
                papers: 1,
                standards: 1,
                softwares: 2,
                projects: 0
            },
            {
                name: '测绘一院',
                awards: 0,
                patents: 0,
                papers: 2,
                standards: 1,
                softwares: 4,
                projects: 0
            }
        ];
        
        // 计算各维度的最大值，用于动态调整雷达图的最大值
        var maxAwards = Math.max(...techOutputData.map(d => d.awards));
        var maxPatents = Math.max(...techOutputData.map(d => d.patents));
        var maxPapers = Math.max(...techOutputData.map(d => d.papers));
        var maxStandards = Math.max(...techOutputData.map(d => d.standards));
        var maxSoftwares = Math.max(...techOutputData.map(d => d.softwares));
        var maxProjects = Math.max(...techOutputData.map(d => d.projects));
        
        // 为每个维度设置合适的最大值（向上取整到最近的5的倍数）
        var maxValues = {
            awards: Math.ceil(maxAwards / 5) * 5 || 10,
            patents: Math.ceil(maxPatents / 5) * 5 || 5,
            papers: Math.ceil(maxPapers / 5) * 5 || 10,
            standards: Math.ceil(maxStandards / 5) * 5 || 5,
            softwares: Math.ceil(maxSoftwares / 5) * 5 || 5,
            projects: Math.ceil(maxProjects / 5) * 5 || 10
        };
        
        var techOutputOption = {
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var branchName = params.name;
                    var branchData = techOutputData.find(d => d.name === branchName);
                    if (!branchData) return '';
                    
                    var indicators = ['获奖数量', '专利数量', '论文数量', '标准数量', '软著数量', '科研项目数量'];
                    var values = [
                        branchData.awards,
                        branchData.patents,
                        branchData.papers,
                        branchData.standards,
                        branchData.softwares,
                        branchData.projects
                    ];
                    
                    var result = '<div style="font-weight: bold; margin-bottom: 8px; font-size: 14px;">' + branchName + '</div>';
                    
                    indicators.forEach(function(indicator, index) {
                        var value = values[index];
                        var percentage = ((value / maxValues[Object.keys(maxValues)[index]]) * 100).toFixed(1);
                        
                        result += '<div style="margin-bottom: 4px; display: flex; justify-content: space-between; align-items: center;">';
                        result += '<span style="color: #666;">' + indicator + ':</span>';
                        result += '<div style="display: flex; align-items: center;">';
                        result += '<span style="font-weight: bold; color: #1e88e5; margin-right: 8px;">' + value + '项</span>';
                        result += '<span style="color: #999; font-size: 12px;">(' + percentage + '%)</span>';
                        result += '</div>';
                        result += '</div>';
                    });
                    
                    return result;
                }
            },
            legend: {
                data: techOutputData.map(d => d.name),
                bottom: 0,
                type: 'scroll',
                orient: 'horizontal',
                textStyle: {
                    fontSize: 11,
                    color: '#6b7280'
                },
                pageTextStyle: {
                    color: '#6b7280'
                },
                pageIconColor: chartColors.primary,
                pageIconInactiveColor: '#d1d5db',
                pageIconSize: 12,
                pageButtonItemGap: 3,
                pageFormatter: '{current}/{total}',
                pageButtonPosition: 'end'
            },
            radar: {
                indicator: [
                    { name: '获奖数量', max: maxValues.awards },
                    { name: '专利数量', max: maxValues.patents },
                    { name: '论文数量', max: maxValues.papers },
                    { name: '标准数量', max: maxValues.standards },
                    { name: '软著数量', max: maxValues.softwares },
                    { name: '科研项目数量', max: maxValues.projects }
                ],
                radius: '65%',
                splitNumber: 5,
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.5)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12
                    }
                }
            },
            series: [
                {
                    type: 'radar',
                    data: techOutputData.map(function(branch, index) {
                        return {
                            value: [
                                branch.awards,
                                branch.patents,
                                branch.papers,
                                branch.standards,
                                branch.softwares,
                                branch.projects
                            ],
                            name: branch.name,
                            areaStyle: {
                                color: 'rgba(30, 136, 229, 0.15)'
                            },
                            lineStyle: {
                                color: radarColors[index],
                                width: 2
                            },
                            itemStyle: {
                                color: radarColors[index]
                            },
                            symbolSize: 6
                        };
                    })
                }
            ]
        };
        
        techOutputChart.setOption(techOutputOption);
        console.log('科技成果产出图表（展示各维度数量）初始化成功');
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            techOutputChart.resize();
        });
    }
} catch (error) {
    console.error('科技成果产出图表初始化失败:', error);
}
    

// ============ 修改：四个成果等级分布雷达图（展示所有分院） ============



// 1. 获奖等级分布柱状图（统一风格）
try {
    var awardLevelChartDom = document.getElementById('awardLevelChart');
    if (awardLevelChartDom) {
        var awardLevelChart = echarts.init(awardLevelChartDom);
        
        // 数据整理
        var awardData = [
            { name: '技术研发中心', awards: [
                { level: '部级二等奖', count: 1 },
                { level: '部级一等奖', count: 1 },
                { level: '省级二等奖', count: 1 }
            ]},
            { name: '测绘三院', awards: [
                { level: '部级二等奖', count: 1 }
            ]},
            { name: '信息工程院', awards: [
                { level: '部级二等奖', count: 1 }
            ]},
            { name: '海洋院', awards: [
                { level: '部级二等奖', count: 1 },
                { level: '市级一等奖', count: 1 }
            ]}
        ];
        
        // 计算每个分院的获奖总数，并按总数降序排序
        awardData.forEach(branch => {
            branch.total = branch.awards.reduce((sum, a) => sum + a.count, 0);
        });
        
        // 按获奖总数降序排列
        awardData.sort((a, b) => b.total - a.total);
        
        // 提取有获奖的分院
        var branchesWithAwards = awardData.map(item => item.name);
        
        // 获奖等级（按级别从高到低排序）
        var awardLevels = ['部级一等奖', '部级二等奖', '省级二等奖', '市级一等奖'];
        
        // 构建数据系列（堆叠柱状图）
        var seriesData = awardLevels.map(level => {
            var data = awardData.map(branch => {
                var award = branch.awards.find(a => a.level === level);
                return award ? award.count : 0;
            });
            
            return {
                name: level,
                type: 'bar',
                stack: 'awards',
                barWidth: '60%',
                data: data,
                label: {
                    show: true,
                    position: 'inside',
                    formatter: function(params) {
                        return params.value > 0 ? params.value : '';
                    },
                    fontSize: 10,
                    color: '#fff'
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            };
        });
        
        // 为每种获奖等级分配颜色（按级别从高到低渐变）
        var colorMap = {
            '部级一等奖':   '#1565c0',    // 红色 - 最高级别
            '部级二等奖':  '#2196f3',    // 黄色 - 高级别
            '省级二等奖': '#64b5f6',    // 绿色 - 中级别
            '市级一等奖':   '#bbdefb'     // 蓝色 - 一般级别
        };
        
        seriesData.forEach(series => {
            series.itemStyle = {
                color: colorMap[series.name]
            };
        });
        
        var awardLevelOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var branchIndex = params[0].dataIndex;
                    var branch = awardData[branchIndex];
                    var total = branch.total;
                    
                    var html = `<div style="font-weight: bold; margin-bottom: 8px; font-size: 14px;">${branch.name}</div>`;
                    html += `<div style="color: #666; margin-bottom: 8px; background: #f3f4f6; padding: 4px 8px; border-radius: 4px;">获奖总数: <b style="color: #ee6666; font-size: 16px;">${total}项</b></div>`;
                    
                    if (total > 0) {
                        html += `<div style="font-weight: 500; margin-bottom: 6px; color: #374151;">获奖详情:</div>`;
                        
                        // 按等级显示（从高到低）
                        var hasHighLevel = false; // 是否有部级奖项
                        var highLevelCount = 0;
                        
                        awardLevels.forEach(level => {
                            var award = branch.awards.find(a => a.level === level);
                            if (award) {
                                var count = award.count;
                                var color = colorMap[level];
                                var percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;
                                
                                // 记录高级别奖项
                                if (level.includes('部级')) {
                                    hasHighLevel = true;
                                    highLevelCount += count;
                                }
                                
                                html += `<div style="display: flex; justify-content: space-between; margin-bottom: 6px; padding: 4px 0; border-bottom: 1px dashed #e5e7eb;">
                                            <span>
                                                <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${color}; margin-right: 8px; vertical-align: middle;"></span>
                                                <span style="vertical-align: middle;">${level}:</span>
                                            </span>
                                            <div style="text-align: right;">
                                                <span style="font-weight: bold; margin-right: 8px; font-size: 14px; color: ${color};">${count}项</span>
                                                <span style="color: #9ca3af; font-size: 12px;">(${percentage}%)</span>
                                            </div>
                                        </div>`;
                            }
                        });
                        
                        // 如果有高级别奖项，显示统计信息
                        if (hasHighLevel) {
                            var highLevelPercentage = ((highLevelCount / total) * 100).toFixed(1);
                            
                            html += `<div style="margin-top: 8px; padding: 6px; background: linear-gradient(90deg, rgba(238,102,102,0.1) 0%, rgba(250,200,88,0.1) 100%); border-radius: 4px;">
                                        <div style="display: flex; justify-content: space-between; color: #374151; font-weight: 600;">
                                            <span>部级奖项:</span>
                                            <span style="color: #ee6666;">${highLevelCount}项 (${highLevelPercentage}%)</span>
                                        </div>
                                    </div>`;
                        }
                    } else {
                        html += `<div style="color: #999; font-style: italic; padding: 8px; text-align: center;">暂无获奖</div>`;
                    }
                    
                    return html;
                }
            },
            legend: {
                data: awardLevels,
                bottom: '1%',
                textStyle: {
                    fontSize: 11,
                    color: '#374151',
                    fontWeight: '500'
                },
                itemWidth: 12,
                itemHeight: 12,
                itemStyle: {
                    borderWidth: 0
                },
                itemGap: 15
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '12%',
                top: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: branchesWithAwards,
                axisLabel: {
                    fontSize: 12,
                    color: '#374151',
                    interval: 0,
                    rotate: branchesWithAwards.some(name => name.length > 4) ? 0 : 0
                },
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb',
                        width: 1
                    }
                },
                axisTick: {
                    alignWithLabel: true,
                    length: 4
                }
            },
            yAxis: {
                type: 'value',
                name: '数量（项）',
                nameTextStyle: {
                    color: '#374151',
                    fontSize: 12,
                    fontWeight: '500'
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'solid'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#e5e7eb',
                        width: 1
                    }
                },
                axisLabel: {
                    color: '#6b7280',
                    fontSize: 11
                },
                min: 0,
                max: function(value) {
                    // 自动调整Y轴最大值
                    var maxTotal = Math.max(...awardData.map(branch => branch.total));
                    return Math.ceil(maxTotal * 1.1);
                },
                interval: 1 // 固定间隔为1
            },
            series: seriesData
        };
        
        awardLevelChart.setOption(awardLevelOption);
        console.log('获奖等级分布柱状图（统一风格）初始化成功');
        
        // 添加图表点击事件
        awardLevelChart.on('click', function(params) {
            if (params.componentType === 'series' && params.data > 0) {
                console.log('点击分院:', params.name, '获奖等级:', params.seriesName, '数量:', params.data);
            }
        });
        
        window.addEventListener('resize', function() {
            awardLevelChart.resize();
        });
    }
} catch (error) {
    console.error('获奖等级分布柱状图初始化失败:', error);
}
// 2. 专利类型分布柱状图（统一风格）
try {
    var patentChartDom = document.getElementById('patentLevelChart');
    if (patentChartDom) {
        var patentChart = echarts.init(patentChartDom);
        
        // 专利数据（从你的雷达图数据转换）
        var patentData = [
            { name: '技术研发中心', patents: [
                { type: '发明', count: 19 }
            ]},
            { name: '信息工程院', patents: [
                { type: '发明', count: 1 }
            ]},
            { name: '调查监测院', patents: [
                { type: '发明', count: 2 }
            ]},
            { name: '测绘四院', patents: [
                { type: '实用新型', count: 1 }
            ]},
            { name: '测绘三院', patents: [
                { type: '发明', count: 1 }
            ]}
        ];
        
        // 计算每个分院的专利总数，并按总数降序排序
        patentData.forEach(branch => {
            branch.total = branch.patents.reduce((sum, p) => sum + p.count, 0);
        });
        
        // 按专利总数降序排列
        patentData.sort((a, b) => b.total - a.total);
        
        // 提取有专利的分院
        var branchesWithPatents = patentData.map(item => item.name);
        
        // 专利类型（按创新程度从高到低排序）
        var patentTypes = ['发明', '实用新型'];
        
        // 构建数据系列（堆叠柱状图）
        var seriesData = patentTypes.map(type => {
            var data = patentData.map(branch => {
                var patent = branch.patents.find(p => p.type === type);
                return patent ? patent.count : 0;
            });
            
            return {
                name: type,
                type: 'bar',
                stack: 'patents',
                barWidth: '60%',
                data: data,
                label: {
                    show: true,
                    position: 'inside',
                    formatter: function(params) {
                        return params.value > 0 ? params.value : '';
                    },
                    fontSize: 10,
                    color: '#fff'
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            };
        });
        
        // 为每种专利类型分配颜色（按创新程度从高到低）
        var colorMap = {
            '发明': '#1565c0',      // 红色 - 发明专利（创新程度高）
            '实用新型': '#2196f3'   // 蓝色 - 实用新型
        };
        
        seriesData.forEach(series => {
            series.itemStyle = {
                color: colorMap[series.name]
            };
        });
        
        var patentOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var branchIndex = params[0].dataIndex;
                    var branch = patentData[branchIndex];
                    var total = branch.total;
                    
                    var html = `<div style="font-weight: bold; margin-bottom: 8px; font-size: 14px;">${branch.name}</div>`;
                    html += `<div style="color: #666; margin-bottom: 8px; background: #f3f4f6; padding: 4px 8px; border-radius: 4px;">专利总数: <b style="color: #ee6666; font-size: 16px;">${total}项</b></div>`;
                    
                    if (total > 0) {
                        html += `<div style="font-weight: 500; margin-bottom: 6px; color: #374151;">专利详情:</div>`;
                        
                        // 按类型显示（从高到低）
                        var hasInvention = false; // 是否有发明专利
                        var inventionCount = 0;
                        
                        patentTypes.forEach(type => {
                            var patent = branch.patents.find(p => p.type === type);
                            if (patent) {
                                var count = patent.count;
                                var color = colorMap[type];
                                var percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;
                                
                                // 记录发明专利
                                if (type === '发明') {
                                    hasInvention = true;
                                    inventionCount = count;
                                }
                                
                                html += `<div style="display: flex; justify-content: space-between; margin-bottom: 6px; padding: 4px 0; border-bottom: 1px dashed #e5e7eb;">
                                            <span>
                                                <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${color}; margin-right: 8px; vertical-align: middle;"></span>
                                                <span style="vertical-align: middle;">${type}:</span>
                                            </span>
                                            <div style="text-align: right;">
                                                <span style="font-weight: bold; margin-right: 8px; font-size: 14px; color: ${color};">${count}项</span>
                                                <span style="color: #9ca3af; font-size: 12px;">(${percentage}%)</span>
                                            </div>
                                        </div>`;
                            }
                        });
                        
                        // 如果有发明专利，显示统计信息
                        if (hasInvention) {
                            var inventionPercentage = ((inventionCount / total) * 100).toFixed(1);
                            
                            html += `<div style="margin-top: 8px; padding: 6px; background: linear-gradient(90deg, rgba(238,102,102,0.1) 0%, rgba(238,102,102,0.05) 100%); border-radius: 4px;">
                                        <div style="display: flex; justify-content: space-between; color: #374151; font-weight: 600;">
                                            <span>发明专利占比:</span>
                                            <span style="color: #ee6666;">${inventionPercentage}%</span>
                                        </div>
                                    </div>`;
                        }
                    } else {
                        html += `<div style="color: #999; font-style: italic; padding: 8px; text-align: center;">暂无专利</div>`;
                    }
                    
                    return html;
                }
            },
            legend: {
                data: patentTypes,
                bottom: '1%',
                textStyle: {
                    fontSize: 12,
                    color: '#374151',
                    fontWeight: '500'
                },
                itemWidth: 16,
                itemHeight: 16,
                itemStyle: {
                    borderWidth: 0
                },
                itemGap: 20
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '10%',
                top: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: branchesWithPatents,
                axisLabel: {
                    fontSize: 12,
                    color: '#374151',
                    interval: 0,
                    rotate: branchesWithPatents.some(name => name.length > 4) ? 0 : 0
                },
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb',
                        width: 1
                    }
                },
                axisTick: {
                    alignWithLabel: true,
                    length: 4
                }
            },
            yAxis: {
    type: 'value',
    name: '数量（项）',
    nameTextStyle: {
        color: '#374151',
        fontSize: 12,
        fontWeight: '500'
    },
    splitLine: {
        show: true,
        lineStyle: {
            color: '#f3f4f6',
            type: 'solid',
            width: 1
        }
    },
    axisLine: {
        show: true,
        lineStyle: {
            color: '#e5e7eb',
            width: 1
        }
    },
    axisLabel: {
        show: true,
        color: '#6b7280',
        fontSize: 11
    },
    min: 0,
    max: 20, // 设置最大值为20
    interval: 2 // 每2个单位显示一个刻度
},
            series: seriesData
        };
        
        patentChart.setOption(patentOption);
        console.log('专利类型分布柱状图（统一风格）初始化成功');
        
        // 添加图表点击事件
        patentChart.on('click', function(params) {
            if (params.componentType === 'series' && params.data > 0) {
                console.log('点击分院:', params.name, '专利类型:', params.seriesName, '数量:', params.data);
            }
        });
        
        window.addEventListener('resize', function() {
            patentChart.resize();
        });
    }
} catch (error) {
    console.error('专利类型分布柱状图初始化失败:', error);
}
// 3. 论文等级分布柱状图（根据实际数据）
try {
    var paperLevelChartDom = document.getElementById('paperLevelChart');
    if (paperLevelChartDom) {
        var paperLevelChart = echarts.init(paperLevelChartDom);
        
        // 根据实际数据整理
        var rawData = [
            { branch: '技术研发中心', level: '一般', count: 6 },
            { branch: '调查监测院', level: '一般', count: 7 },
            { branch: '信息工程院', level: '一般', count: 4 },
            { branch: '测绘八院', level: '核心', count: 2 },
            { branch: '测绘八院', level: '一般', count: 1 },
            { branch: '测绘七院', level: '一般', count: 1 },
            { branch: '基础测绘院', level: '核心', count: 1 },
            { branch: '测绘三院', level: '一般', count: 3 },
            { branch: '滨海院', level: '核心', count: 1 },
            { branch: '测绘一院', level: '一般', count: 2 }
        ];
        
        // 将数据按分院分组
        var branchMap = {};
        rawData.forEach(item => {
            if (!branchMap[item.branch]) {
                branchMap[item.branch] = {
                    name: item.branch,
                    papers: []
                };
            }
            branchMap[item.branch].papers.push({
                level: item.level,
                count: item.count
            });
        });
        
        // 转换为数组格式
        var paperData = Object.values(branchMap);
        
        // 计算每个分院的论文总数，并按总数降序排序
        paperData.forEach(branch => {
            branch.total = branch.papers.reduce((sum, p) => sum + p.count, 0);
        });
        
        // 按论文总数降序排列
        paperData.sort((a, b) => b.total - a.total);
        
        // 提取有论文的分院（已经排序）
        var branchesWithPapers = paperData.map(item => item.name);
        
        // 论文级别（根据实际数据只有两种）
        var paperLevels = ['核心', '一般'];
        
        // 构建数据系列（堆叠柱状图）
        var seriesData = paperLevels.map(level => {
            var data = paperData.map(branch => {
                var paper = branch.papers.find(p => p.level === level);
                return paper ? paper.count : 0;
            });
            
            return {
                name: level,
                type: 'bar',
                stack: 'papers',
                barWidth: '60%',
                data: data,
                label: {
                    show: true,
                    position: 'inside',
                    formatter: function(params) {
                        return params.value > 0 ? params.value : '';
                    },
                    fontSize: 11,
                    color: '#fff'
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            };
        });
        
        // 为每种论文级别分配颜色
        var colorMap = {
            '核心': '#1565c0',    // 红色 - 核心期刊
            '一般': '#2196f3'     // 黄色 - 一般期刊
        };
        
        seriesData.forEach(series => {
            series.itemStyle = {
                color: colorMap[series.name]
            };
        });
        
        var paperOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var branchIndex = params[0].dataIndex;
                    var branch = paperData[branchIndex];
                    var total = branch.total;
                    
                    var html = `<div style="font-weight: bold; margin-bottom: 8px; font-size: 14px;">${branch.name}</div>`;
                    html += `<div style="color: #666; margin-bottom: 8px; background: #f3f4f6; padding: 4px 8px; border-radius: 4px;">论文总数: <b style="color: #ee6666; font-size: 16px;">${total}篇</b></div>`;
                    
                    if (total > 0) {
                        html += `<div style="font-weight: 500; margin-bottom: 6px; color: #374151;">论文分布:</div>`;
                        
                        // 按级别显示
                        var hasCore = false;
                        paperLevels.forEach(level => {
                            var paper = branch.papers.find(p => p.level === level);
                            var count = paper ? paper.count : 0;
                            if (count > 0) {
                                var color = colorMap[level];
                                var percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;
                                
                                if (level === '核心') hasCore = true;
                                
                                html += `<div style="display: flex; justify-content: space-between; margin-bottom: 6px; padding: 4px 0; border-bottom: 1px dashed #e5e7eb;">
                                            <span>
                                                <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${color}; margin-right: 8px; vertical-align: middle;"></span>
                                                <span style="vertical-align: middle;">${level}期刊:</span>
                                            </span>
                                            <div style="text-align: right;">
                                                <span style="font-weight: bold; margin-right: 8px; font-size: 14px; color: ${color};">${count}篇</span>
                                                <span style="color: #9ca3af; font-size: 12px;">(${percentage}%)</span>
                                            </div>
                                        </div>`;
                            }
                        });
                        
                        // 如果有核心期刊，显示核心占比
                        if (hasCore) {
                            var corePaper = branch.papers.find(p => p.level === '核心');
                            var coreCount = corePaper ? corePaper.count : 0;
                            var corePercentage = ((coreCount / total) * 100).toFixed(1);
                            
                            html += `<div style="margin-top: 8px; padding: 6px; background: linear-gradient(90deg, rgba(238,102,102,0.1) 0%, rgba(238,102,102,0.05) 100%); border-radius: 4px;">
                                        <div style="display: flex; justify-content: space-between; color: #ee6666; font-weight: 600;">
                                            <span>核心期刊占比:</span>
                                            <span>${corePercentage}%</span>
                                        </div>
                                    </div>`;
                        }
                    } else {
                        html += `<div style="color: #999; font-style: italic; padding: 8px; text-align: center;">暂无论文发表</div>`;
                    }
                    
                    return html;
                }
            },
            legend: {
                data: paperLevels,
                bottom: '1%',
                textStyle: {
                    fontSize: 12,
                    color: '#374151',
                    fontWeight: '500'
                },
                itemWidth: 16,
                itemHeight: 16,
                itemStyle: {
                    borderWidth: 0
                },
                itemGap: 20
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '10%',
                top: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: branchesWithPapers,
                axisLabel: {
                    fontSize: 12,
                    color: '#374151',
                    interval: 0,
                    rotate: branchesWithPapers.some(name => name.length > 4) ? 20 : 0
                },
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb',
                        width: 1
                    }
                },
                axisTick: {
                    alignWithLabel: true,
                    length: 4
                }
            },
           yAxis: {
    type: 'value',
    name: '数量（篇）',
    nameTextStyle: {
        color: '#374151',
        fontSize: 12,
        fontWeight: '500'
    },
    // 确保网格线显示
    splitLine: {
        show: true, // 确保显示网格线
        lineStyle: {
            color: '#f3f4f6',
            type: 'solid',
            width: 1
        }
    },
    axisLine: {
        show: true,
        lineStyle: {
            color: '#e5e7eb',
            width: 1
        }
    },
    // 确保Y轴数值显示
    axisLabel: {
        show: true, // 确保显示数值
        color: '#6b7280',
        fontSize: 11
    },
    // 固定Y轴范围（根据最大论文数7，可以设置到8）
    min: 0,
    max: 7,
    // 固定间隔，显示0,1,2,3,4,5,6,7,8
    interval: 1 // 每1个单位显示一个刻度
},
            series: seriesData
        };
        
        paperLevelChart.setOption(paperOption);
        console.log('论文等级分布柱状图初始化成功，显示分院数:', branchesWithPapers.length);
        console.log('各分院论文总数:', paperData.map(b => ({name: b.name, total: b.total})));
        
        // 添加图表点击事件
        paperLevelChart.on('click', function(params) {
            if (params.componentType === 'series' && params.data > 0) {
                console.log('点击分院:', params.name, '论文级别:', params.seriesName, '数量:', params.data);
                // 可以在这里添加交互逻辑，比如弹窗显示详情
            }
        });
        
        window.addEventListener('resize', function() {
            paperLevelChart.resize();
        });
    }
} catch (error) {
    console.error('论文等级分布柱状图初始化失败:', error);
}

// 4. 标准等级分布柱状图（根据真实数据）
try {
    var standardLevelChartDom = document.getElementById('standardLevelChart');
    if (standardLevelChartDom) {
        var standardLevelChart = echarts.init(standardLevelChartDom);
        
        // 根据真实数据整理
        var rawData = [
            { category: '国标', role: '参编', department: '研发中心', count: 1 },
            { category: '国标', role: '参编', department: '测绘四院', count: 1 },
            { category: '行标', role: '参编', department: '调查监测院', count: 1 },
            { category: '行标', role: '参编', department: '测绘一院', count: 1 },
            { category: '行标', role: '参编', department: '测绘三院', count: 1 },
            { category: '地标', role: '主编', department: '测绘四院', count: 1 },
            { category: '地标', role: '主编', department: '海洋院', count: 1 },
            { category: '地标', role: '主编', department: '研发中心', count: 4 },
            { category: '地标', role: '主编', department: '基础测绘院', count: 1 },
            { category: '地标', role: '主编', department: '技术质量部', count: 6 },
            { category: '地标', role: '主编', department: '信息工程院', count: 2 },
            { category: '地标', role: '主编', department: '调查监测院', count: 2 },
            { category: '地标', role: '主编', department: '滨海院', count: 1 },
            { category: '地标', role: '主编', department: '测绘七院', count: 4 },
            { category: '地标', role: '主编', department: '测绘二院', count: 1 },
            { category: '团标', role: '参编', department: '测绘三院', count: 3 },
            { category: '团标', role: '参编', department: '研发中心', count: 2 },
            { category: '团标', role: '参编', department: '技术质量部', count: 2 }
        ];
        
        // 将数据按部门分组
        var departmentMap = {};
        rawData.forEach(item => {
            if (!departmentMap[item.department]) {
                departmentMap[item.department] = {
                    name: item.department,
                    standards: []
                };
            }
            
            // 检查是否已有该类别，有则累加
            var existingStandard = departmentMap[item.department].standards.find(s => s.type === item.category);
            if (existingStandard) {
                existingStandard.count += item.count;
                // 合并角色信息
                if (!existingStandard.roles.includes(item.role)) {
                    existingStandard.roles.push(item.role);
                }
            } else {
                departmentMap[item.department].standards.push({
                    type: item.category,
                    count: item.count,
                    roles: [item.role]
                });
            }
        });
        
        // 转换为数组格式
        var standardData = Object.values(departmentMap);
        
        // 计算每个部门的标准总数，并按总数降序排序
        standardData.forEach(dept => {
            dept.total = dept.standards.reduce((sum, s) => sum + s.count, 0);
        });
        
        // 按标准总数降序排列
        standardData.sort((a, b) => b.total - a.total);
        
        // 提取有标准的部门
        var departmentsWithStandards = standardData.map(item => item.name);
        
        // 标准类型（按数据中出现的类型排序，从高到低）
        var standardTypes = ['国标', '行标', '地标', '团标']; // 实际数据中没有企标
        
        // 构建数据系列（堆叠柱状图）
        var seriesData = standardTypes.map(type => {
            var data = standardData.map(dept => {
                var standard = dept.standards.find(s => s.type === type);
                return standard ? standard.count : 0;
            });
            
            return {
                name: type,
                type: 'bar',
                stack: 'standards',
                barWidth: '60%',
                data: data,
                label: {
                    show: true,
                    position: 'inside',
                    formatter: function(params) {
                        return params.value > 0 ? params.value : '';
                    },
                    fontSize: 10,
                    color: '#fff'
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            };
        });
        
        // 为每种标准类型分配颜色
        var colorMap = {
            '国标':  '#1565c0',    // 红色 - 国家标准（最高级别）
            '行标': '#2196f3',    // 黄色 - 行业标准
            '地标': '#64b5f6',    // 绿色 - 地方标准
            '团标':  '#bbdefb'    // 蓝色 - 团体标准
        };
        
        seriesData.forEach(series => {
            series.itemStyle = {
                color: colorMap[series.name]
            };
        });
        
        var standardOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var deptIndex = params[0].dataIndex;
                    var dept = standardData[deptIndex];
                    var total = dept.total;
                    
                    var html = `<div style="font-weight: bold; margin-bottom: 8px; font-size: 14px;">${dept.name}</div>`;
                    html += `<div style="color: #666; margin-bottom: 8px; background: #f3f4f6; padding: 4px 8px; border-radius: 4px;">标准总数: <b style="color: #ee6666; font-size: 16px;">${total}项</b></div>`;
                    
                    if (total > 0) {
                        html += `<div style="font-weight: 500; margin-bottom: 6px; color: #374151;">标准详情:</div>`;
                        
                        // 按类型显示（从高到低）
                        var hasHighLevel = false; // 是否有国标/行标
                        var highLevelCount = 0;
                        var roleSummary = [];
                        
                        standardTypes.forEach(type => {
                            var standard = dept.standards.find(s => s.type === type);
                            if (standard) {
                                var count = standard.count;
                                var color = colorMap[type];
                                var percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;
                                
                                // 记录高级别标准
                                if (type === '国标' || type === '行标') {
                                    hasHighLevel = true;
                                    highLevelCount += count;
                                }
                                
                                html += `<div style="display: flex; justify-content: space-between; margin-bottom: 6px; padding: 4px 0; border-bottom: 1px dashed #e5e7eb;">
                                            <span>
                                                <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${color}; margin-right: 8px; vertical-align: middle;"></span>
                                                <span style="vertical-align: middle;">${type}:</span>
                                            </span>
                                            <div style="text-align: right;">
                                                <span style="font-weight: bold; margin-right: 8px; font-size: 14px; color: ${color};">${count}项</span>
                                                <span style="color: #9ca3af; font-size: 12px;">(${percentage}%)</span>
                                            </div>
                                        </div>`;
                                
                                // 添加角色信息
                                var rolesText = standard.roles.join('、');
                                roleSummary.push(`${type}${rolesText}`);
                            }
                        });
                        
                        // 如果有高级别标准，显示统计信息
                        if (hasHighLevel) {
                            var highLevelPercentage = ((highLevelCount / total) * 100).toFixed(1);
                            
                            html += `<div style="margin-top: 8px; padding: 6px; background: linear-gradient(90deg, rgba(238,102,102,0.1) 0%, rgba(250,200,88,0.1) 100%); border-radius: 4px;">
                                        <div style="display: flex; justify-content: space-between; color: #374151; font-weight: 600;">
                                            <span>高级别标准(国标+行标):</span>
                                            <span style="color: #ee6666;">${highLevelCount}项 (${highLevelPercentage}%)</span>
                                        </div>
                                    </div>`;
                        }
                        
                        // 显示角色参与情况
                        if (roleSummary.length > 0) {
                            html += `<div style="margin-top: 8px; padding: 6px; background: linear-gradient(90deg, rgba(86,119,252,0.1) 0%, rgba(84,112,198,0.1) 100%); border-radius: 4px;">
                                        <div style="color: #5470c6; font-weight: 600; margin-bottom: 4px;">参与情况:</div>
                                        <div style="color: #6b7280; font-size: 12px; line-height: 1.4;">${roleSummary.join('、')}</div>
                                    </div>`;
                        }
                    } else {
                        html += `<div style="color: #999; font-style: italic; padding: 8px; text-align: center;">暂无标准</div>`;
                    }
                    
                    return html;
                }
            },
            legend: {
                data: standardTypes,
                bottom: '1%',
                textStyle: {
                    fontSize: 12,
                    color: '#374151',
                    fontWeight: '500'
                },
                itemWidth: 16,
                itemHeight: 16,
                itemStyle: {
                    borderWidth: 0
                },
                itemGap: 20
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '10%',
                top: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: departmentsWithStandards,
                axisLabel: {
                    fontSize: 12,
                    color: '#374151',
                    interval: 0,
                    rotate: departmentsWithStandards.some(name => name.length > 4) ? 20 : 0
                },
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb',
                        width: 1
                    }
                },
                axisTick: {
                    alignWithLabel: true,
                    length: 4
                }
            },
            yAxis: {
                type: 'value',
                name: '数量（项）',
                nameTextStyle: {
                    color: '#374151',
                    fontSize: 12,
                    fontWeight: '500'
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'solid'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#e5e7eb',
                        width: 1
                    }
                },
                axisLabel: {
                    color: '#6b7280',
                    fontSize: 11
                },
                min: 0,
                max: function(value) {
                    // 自动调整Y轴最大值
                    var maxTotal = Math.max(...standardData.map(dept => dept.total));
                    return Math.ceil(maxTotal * 1.1);
                },
                interval: 2 // 固定间隔为2
            },
            series: seriesData
        };
        
        standardLevelChart.setOption(standardOption);
        console.log('标准等级分布柱状图初始化成功，显示部门数:', departmentsWithStandards.length);
        
        // 添加图表点击事件
        standardLevelChart.on('click', function(params) {
            if (params.componentType === 'series' && params.data > 0) {
                console.log('点击部门:', params.name, '标准类型:', params.seriesName, '数量:', params.data);
            }
        });
        
        window.addEventListener('resize', function() {
            standardLevelChart.resize();
        });
    }
} catch (error) {
    console.error('标准等级分布柱状图初始化失败:', error);
}

// 初始化一次性通过率和一次性符合率图表（双饼图对比）- 统一蓝色配色
try {
    var passRateChartDom = document.getElementById('passRateChart');
    if (passRateChartDom) {
        var passRateChart = echarts.init(passRateChartDom);
        
        // 一次性通过率数据（百分比）- 已按通过率从高到低排序
        var passRateData = [
            { name: '研发中心', rate: 100 },
            { name: '滨海院', rate: 98 },
            { name: '测绘四院', rate: 92 },
            { name: '海洋院', rate: 90 },
            { name: '测绘一院', rate: 89 },
            { name: '测绘七院', rate: 88 },
            { name: '基础测绘院', rate: 86 },
            { name: '信息工程院', rate: 85 },
            { name: '测绘八院', rate: 81 },
            { name: '测绘三院', rate: 76 },
            { name: '调查监测院', rate: 36 }
        ];
        
        // 按照通过率从大到小排序（数据已经排序）
        // 使用固定的布局位置，现在数据已经按顺序排列
        var branchConfig = [
            { name: '研发中心', center: ['10%', '15%'], labelPos: ['4%', '28%'] },
            { name: '滨海院', center: ['30%', '15%'], labelPos: ['25%', '28%'] },
            { name: '测绘四院', center: ['50%', '15%'], labelPos: ['45%', '28%'] },
            { name: '海洋院', center: ['70%', '15%'], labelPos: ['67%', '28%'] },
            { name: '测绘一院', center: ['90%', '15%'], labelPos: ['86%', '28%'] },
            { name: '测绘七院', center: ['10%', '50%'], labelPos: ['6%', '63%'] },
            { name: '基础测绘院', center: ['30%', '50%'], labelPos: ['25%', '63%'] },
            { name: '信息工程院', center: ['50%', '50%'], labelPos: ['46%', '63%'] },
            { name: '测绘八院', center: ['70%', '50%'], labelPos: ['66%', '63%'] },
            { name: '测绘三院', center: ['90%', '50%'], labelPos: ['87%', '63%'] },
            { name: '调查监测院', center: ['50%', '85%'], labelPos: ['46%', '96%'] }
        ];
        
        // 创建系列
        var seriesData = [];
        var graphicElements = [];
        
        // 定义统一的蓝色
        var primaryColor = '#3b82f6'; // 主要蓝色
        
        for (var i = 0; i < branchConfig.length; i++) {
            var config = branchConfig[i];
            
            // 找到对应分院的数据（现在数据已经按顺序排列）
            var branchData = passRateData[i];
            
            if (!branchData) continue;
            
            // 计算未通过率
            var notPassRate = 100 - branchData.rate;
            
            // 添加饼图系列
            seriesData.push({
                name: config.name,
                type: 'pie',
                radius: ['15%', '20%'],
                center: config.center,
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    formatter: branchData.rate + '%',  // 显示通过率
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#1e293b'
                },
                emphasis: {
                    scale: true,
                    scaleSize: 10,
                    label: {
                        show: true,
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: '#1e293b',
                        formatter: branchData.rate + '%'  // 悬停时也显示通过率
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { 
                        value: branchData.rate, 
                        name: '通过', 
                        itemStyle: { 
                            color: primaryColor, // 所有饼图使用相同的蓝色
                            borderRadius: 10
                        } 
                    },
                    { 
                        value: notPassRate, 
                        name: '未通过', 
                        itemStyle: { 
                            color: '#e5e7eb', // 所有未通过部分使用相同的灰色
                            borderWidth: 0
                        } 
                    }
                ],
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#ffffff',
                    borderRadius: 10
                }
            });
            
            // 添加分院名称标签
            graphicElements.push({
                type: 'text',
                left: config.labelPos[0],
                top: config.labelPos[1],
                style: {
                    text: config.name,
                    fontSize: 12,
                    textAlign: 'center',
                    fill: '#6b7280',
                    fontWeight: '500'
                }
            });
        }
        
        var passRateOption = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    var branchName = params.seriesName;
                    var branchData = passRateData.find(function(item) {
                        return item.name === branchName;
                    });
                    
                    if (!branchData) return '';
                    
                    return '<div style="font-weight: bold; margin-bottom: 8px; color: #1e293b;">' + branchName + '</div>' +
                           '<div style="display: flex; justify-content: space-between; margin-bottom: 4px;">' +
                           '<span>通过率: </span>' +
                           '<span style="font-weight: bold; color: #3b82f6;">' + branchData.rate + '%</span>' +
                           '</div>' +
                           '<div style="display: flex; justify-content: space-between; margin-bottom: 4px;">' +
                           '<span>未通过: </span>' +
                           '<span style="font-weight: bold; color: #6b7280;">' + (100 - branchData.rate) + '%</span>' +
                           '</div>' +
                           '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 11px;">' +
                           '排序: 第' + (passRateData.findIndex(item => item.name === branchName) + 1) + '名' +
                           '</div>';
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
            },
            legend: {
                orient: 'horizontal',
                left: 'right',
                top: '95%',
                data: [
                    { name: '通过', itemStyle: { color: primaryColor } },
                    { name: '未通过', itemStyle: { color: '#e5e7eb' } }
                ],
                textStyle: {
                    color: '#6b7280',
                    fontSize: 12
                },
                itemWidth: 12,
                itemHeight: 12
            },
            graphic: graphicElements,
            series: seriesData
        };
        
        passRateChart.setOption(passRateOption);
        console.log('一次性通过率图表（已按通过率从大到小排序，统一蓝色）初始化成功');
        
        // 在控制台显示排序结果
        console.log('一次性通过率排序结果：');
        passRateData.forEach((item, index) => {
            console.log((index + 1) + '. ' + item.name + ': ' + item.rate + '%');
        });
        
        // 响应式调整
        window.addEventListener('resize', function() {
            passRateChart.resize();
        });
    }
} catch (error) {
    console.error('一次性通过率图表初始化失败:', error);
}

// 初始化一次性符合率图表 - 统一蓝色配色
try {
    var complianceRateChartDom = document.getElementById('complianceRateChart');
    if (complianceRateChartDom) {
        var complianceRateChart = echarts.init(complianceRateChartDom);
        
        // 一次性符合率数据（百分比）- 已按符合率从高到低排序
        var complianceRateData = [
            { name: '研发中心', rate: 100 },
            { name: '滨海院', rate: 98 },
            { name: '测绘七院', rate: 96 },
            { name: '测绘一院', rate: 95 },
            { name: '测绘四院', rate: 93 },
            { name: '海洋院', rate: 92 },
            { name: '基础测绘院', rate: 88 },
            { name: '信息工程院', rate: 85 },
            { name: '测绘八院', rate: 84 },
            { name: '测绘三院', rate: 77 },
            { name: '调查监测院', rate: 43 }
        ];
        
        // 按照符合率从大到小排序（数据已经排序）
        // 使用固定的布局位置，现在数据已经按顺序排列
        var branchConfig = [
            { name: '研发中心', center: ['10%', '15%'], labelPos: ['4%', '28%'] },
            { name: '滨海院', center: ['30%', '15%'], labelPos: ['25%', '28%'] },
            { name: '测绘七院', center: ['50%', '15%'], labelPos: ['45%', '28%'] },
            { name: '测绘一院', center: ['70%', '15%'], labelPos: ['67%', '28%'] },
            { name: '测绘四院', center: ['90%', '15%'], labelPos: ['86%', '28%'] },
            { name: '海洋院', center: ['10%', '50%'], labelPos: ['6%', '63%'] },
            { name: '基础测绘院', center: ['30%', '50%'], labelPos: ['25%', '63%'] },
            { name: '信息工程院', center: ['50%', '50%'], labelPos: ['46%', '63%'] },
            { name: '测绘八院', center: ['70%', '50%'], labelPos: ['66%', '63%'] },
            { name: '测绘三院', center: ['90%', '50%'], labelPos: ['87%', '63%'] },
            { name: '调查监测院', center: ['50%', '85%'], labelPos: ['46%', '96%'] }
        ];
        
        // 创建系列
        var seriesData = [];
        var graphicElements = [];
        
        // 定义蓝色
        var primaryColor = '#3b82f6'; // 主要蓝色
        
        for (var i = 0; i < branchConfig.length; i++) {
            var config = branchConfig[i];
            
            // 找到对应分院的数据（现在数据已经按顺序排列）
            var branchData = complianceRateData[i];
            
            if (!branchData) continue;
            
            // 计算不符合率
            var notComplianceRate = 100 - branchData.rate;
            
            // 添加饼图系列
            seriesData.push({
                name: config.name,
                type: 'pie',
                radius: ['15%', '20%'],
                center: config.center,
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    formatter: branchData.rate + '%',  // 显示符合率
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#1e293b'
                },
                emphasis: {
                    scale: true,
                    scaleSize: 10,
                    label: {
                        show: true,
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: '#1e293b',
                        formatter: branchData.rate + '%'  // 悬停时也显示符合率
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { 
                        value: branchData.rate, 
                        name: '符合', 
                        itemStyle: { 
                            color: primaryColor,
                            borderRadius: 10
                        } 
                    },
                    { 
                        value: notComplianceRate, 
                        name: '不符合', 
                        itemStyle: { 
                            color: '#e5e7eb', // 灰色背景
                            borderWidth: 0
                        } 
                    }
                ],
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#ffffff',
                    borderRadius: 10
                }
            });
            
            // 添加分院名称标签
            graphicElements.push({
                type: 'text',
                left: config.labelPos[0],
                top: config.labelPos[1],
                style: {
                    text: config.name,
                    fontSize: 12,
                    textAlign: 'center',
                    fill: '#6b7280',
                    fontWeight: '500'
                }
            });
        }
        
        var complianceRateOption = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    var branchName = params.seriesName;
                    var branchData = complianceRateData.find(function(item) {
                        return item.name === branchName;
                    });
                    
                    if (!branchData) return '';
                    
                    return '<div style="font-weight: bold; margin-bottom: 8px; color: #1e293b;">' + branchName + '</div>' +
                           '<div style="display: flex; justify-content: space-between; margin-bottom: 4px;">' +
                           '<span>符合率: </span>' +
                           '<span style="font-weight: bold; color: #3b82f6;">' + branchData.rate + '%</span>' +
                           '</div>' +
                           '<div style="display: flex; justify-content: space-between; margin-bottom: 4px;">' +
                           '<span>不符合: </span>' +
                           '<span style="font-weight: bold; color: #6b7280;">' + (100 - branchData.rate) + '%</span>' +
                           '</div>' +
                           '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 11px;">' +
                           '排序: 第' + (complianceRateData.findIndex(item => item.name === branchName) + 1) + '名' +
                           '</div>';
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
            },
            legend: {
                orient: 'horizontal',
                left: 'right',
                top: '95%',
                data: [
                    { name: '符合', itemStyle: { color: primaryColor } },
                    { name: '不符合', itemStyle: { color: '#e5e7eb' } }
                ],
                textStyle: {
                    color: '#6b7280',
                    fontSize: 12
                },
                itemWidth: 12,
                itemHeight: 12
            },
            graphic: graphicElements,
            series: seriesData
        };
        
        complianceRateChart.setOption(complianceRateOption);
        console.log('一次性符合率图表（已按符合率从大到小排序）初始化成功');
        
        // 在控制台显示排序结果
        console.log('一次性符合率排序结果：');
        complianceRateData.forEach((item, index) => {
            console.log((index + 1) + '. ' + item.name + ': ' + item.rate + '%');
        });
        
        // 响应式调整
        window.addEventListener('resize', function() {
            complianceRateChart.resize();
        });
    }
} catch (error) {
    console.error('一次性符合率图表初始化失败:', error);
}

// 初始化质量事故数量柱状图
try {
    var qualityAccidentChartDom = document.getElementById('qualityAccidentChart');
    if (qualityAccidentChartDom) {
        var qualityAccidentChart = echarts.init(qualityAccidentChartDom);
        
        // 质量事故数据 - 按事故次数从大到小排列
        var accidentData = [
            { name: '测绘八院', accidents: 2 },
            { name: '基础测绘院', accidents: 2 },
            { name: '测绘一院', accidents: 1 },
            { name: '研发中心', accidents: 0 },
            { name: '海洋院', accidents: 0 },
            { name: '调查监测院', accidents: 0 },
            { name: '信息工程院', accidents: 0 },
            { name: '测绘七院', accidents: 0 },
            { name: '测绘四院', accidents: 0 },
            { name: '测绘三院', accidents: 0 },
            { name: '滨海院', accidents: 0 }
        ];
        
        // 提取数据和名称
        var branchNames = accidentData.map(function(item) {
            return item.name;
        });
        
        var accidentCounts = accidentData.map(function(item) {
            return item.accidents;
        });
        
        // 计算最大事故次数
        var maxAccident = Math.max(...accidentCounts);
        
        var qualityAccidentOption = {
            title: {
                show: false,
                text: ''
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params) {
                    var branchName = params[0].name;
                    var accidentCount = params[0].value;
                    
                    var statusText = '';
                    if (accidentCount === 0) {
                        statusText = '<span style="color:#10b981;">无质量事故</span>';
                    } else if (accidentCount === 1) {
                        statusText = '<span style="color:#f59e0b;">有1次质量事故</span>';
                    } else {
                        statusText = '<span style="color:#ef4444;">有' + accidentCount + '次质量事故</span>';
                    }
                    
                    return '<div style="font-weight: bold; margin-bottom: 8px; color: #1e293b;">' + branchName + '</div>' +
                           '<div style="display: flex; justify-content: space-between; margin-bottom: 4px;">' +
                           '<span>质量事故次数: </span>' +
                           '<span style="font-weight: bold;">' + accidentCount + '次</span>' +
                           '</div>' +
                           '<div style="margin-top: 4px;">' + statusText + '</div>';
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
            },
            grid: {
                left: '5%',    // 减小左边距
                right: '5%',   // 减小右边距
                bottom: '8%',  // 减小底部间距
                top: '8%',     // 减小顶部间距
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: branchNames,
                axisLabel: {
                    interval: 0,
                    rotate: 45,
                    fontSize: 12,
                    color: '#6b7280',
                    margin: 10, // 减小标签边距
                    width: 70,  // 设置标签宽度
                    overflow: 'truncate' // 超出部分截断
                },
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                axisTick: {
                    alignWithLabel: true,
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '事故次数',
                nameTextStyle: {
                    fontSize: 12,
                    color: '#6b7280',
                    padding: [0, 0, 0, 0]
                },
                axisLabel: {
                    formatter: function(value) {
                        return value === parseInt(value) ? value : '';
                    },
                    fontSize: 12,
                    color: '#6b7280',
                    margin: 8 // 减小标签边距
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'dashed'
                    }
                },
                min: 0,
                max: Math.ceil(maxAccident + 0.5),
                interval: 1
            },
            series: [
                {
                    name: '质量事故',
                    type: 'bar',
                    data: accidentCounts,
                    itemStyle: {
                        color: '#1e88e5',
                        borderRadius: [4, 4, 0, 0]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function(params) {
                            if (params.value === 0) {
                                return '无事故';
                            } else {
                                return params.value + '次';
                            }
                        },
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#374151'
                    },
                    barWidth: '50%', // 稍微减小柱子宽度
                    barCategoryGap: '30%' // 柱子之间的间距
                }
            ],
            legend: {
                show: false
            }
        };
        
        qualityAccidentChart.setOption(qualityAccidentOption);
        console.log('质量事故数量柱状图初始化成功');
        
        // 响应式调整函数
        function adjustQualityAccidentChart() {
            var width = qualityAccidentChartDom.clientWidth;
            var height = qualityAccidentChartDom.clientHeight;
            
            if (width < 768) {
                // 小屏幕调整
                qualityAccidentOption.grid.left = '8%';
                qualityAccidentOption.grid.right = '3%';
                qualityAccidentOption.grid.bottom = '15%';
                qualityAccidentOption.grid.top = '10%';
                qualityAccidentOption.xAxis.axisLabel.rotate = 60;
                qualityAccidentOption.xAxis.axisLabel.fontSize = 10;
                qualityAccidentOption.xAxis.axisLabel.width = 50;
                qualityAccidentOption.series[0].barWidth = '40%';
            } else {
                // 大屏幕调整
                qualityAccidentOption.grid.left = '5%';
                qualityAccidentOption.grid.right = '5%';
                qualityAccidentOption.grid.bottom = '8%';
                qualityAccidentOption.grid.top = '8%';
                qualityAccidentOption.xAxis.axisLabel.rotate = 45;
                qualityAccidentOption.xAxis.axisLabel.fontSize = 12;
                qualityAccidentOption.xAxis.axisLabel.width = 70;
                qualityAccidentOption.series[0].barWidth = '50%';
            }
            
            // 根据容器高度调整标签显示
            if (height < 350) {
                qualityAccidentOption.series[0].label.show = false;
                qualityAccidentOption.grid.top = '5%';
                qualityAccidentOption.grid.bottom = '5%';
            } else {
                qualityAccidentOption.series[0].label.show = true;
            }
            
            qualityAccidentChart.setOption(qualityAccidentOption, true);
        }
        
        // 初始调整
        adjustQualityAccidentChart();
        
        // 窗口大小变化时重新调整
        window.addEventListener('resize', function() {
            adjustQualityAccidentChart();
            qualityAccidentChart.resize();
        });
        
        // 监听容器尺寸变化（如果有的话）
        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function() {
                adjustQualityAccidentChart();
                qualityAccidentChart.resize();
            });
            resizeObserver.observe(qualityAccidentChartDom);
        }
    }
} catch (error) {
    console.error('质量事故数量柱状图初始化失败:', error);
}


   // 初始化人才梯队建设图表
try {
    var talentStructureChartDom = document.getElementById('talentStructureChart');
    if (talentStructureChartDom) {
        var talentStructureChart = echarts.init(talentStructureChartDom);
        
        // 原始数据
        var originalData = {
            categories: ['技术研发中心', '信息工程院', '调查监测院', '海洋院', '测绘八院', '测绘七院', '基础测绘院', '测绘四院', '测绘三院', '滨海院', '测绘一院'],
            senior: [1, 4, 2, 0, 1, 1, 2, 1, 2, 1, 1],
            intermediate: [2, 7, 3, 0, 1, 1, 0, 2, 4, 1, 1],
            reserve: [4, 4, 1, 1, 1, 5, 3, 3, 3, 3, 2]
        };
        
        // 计算每个分院的总专家人数
        var totalExperts = [];
        for (var i = 0; i < originalData.categories.length; i++) {
            totalExperts.push({
                name: originalData.categories[i],
                senior: originalData.senior[i],
                intermediate: originalData.intermediate[i],
                reserve: originalData.reserve[i],
                total: originalData.senior[i] + originalData.intermediate[i] + originalData.reserve[i]
            });
        }
        
        // 按总专家人数从大到小排序
        totalExperts.sort(function(a, b) {
            return b.total - a.total;
        });
        
        // 提取排序后的数据
        var sortedCategories = [];
        var sortedSenior = [];
        var sortedIntermediate = [];
        var sortedReserve = [];
        
        totalExperts.forEach(function(item) {
            sortedCategories.push(item.name);
            sortedSenior.push(item.senior);
            sortedIntermediate.push(item.intermediate);
            sortedReserve.push(item.reserve);
        });
        
        var talentStructureOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var result = '<div style="font-weight: bold; margin-bottom: 8px; font-size: 14px;">' + params[0].axisValue + '</div>';
                    var total = 0;
                    
                    params.forEach(function(item) {
                        total += item.value;
                        result += '<div style="display: flex; align-items: center; justify-content: space-between; margin: 4px 0;">';
                        result += '<span>' + item.marker + item.seriesName + '</span>';
                        result += '<span style="font-weight: bold; margin-left: 20px;">' + item.value + '人</span>';
                        result += '</div>';
                    });
                    
                    result += '<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 8px 0;">';
                    result += '<div style="display: flex; align-items: center; justify-content: space-between; font-weight: bold;">';
                    result += '<span>总人数</span>';
                    result += '<span style="color: #1e88e5;">' + total + '人</span>';
                    result += '</div>';
                    
                    return result;
                }
            },
            legend: {
                data: ['高级专家', '中级专家', '后备专家'],
                bottom: '3%',
                textStyle: {
                    fontSize: 12,
                    color: '#6b7280'
                }
            },
            grid: {
                left: '1%',
                right: '1%',
                bottom: '7%',
                top: '8%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: sortedCategories,  // 使用排序后的分院名称
                axisLabel: {
                    interval: 0,
                    rotate: 45,
                    fontSize: 12,
                    color: '#6b7280'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '人数',
                nameLocation: 'end', 
                nameTextStyle: {
                    color: '#6b7280',
                    fontSize: 12,

                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    show: true,  // 确保显示
                    color: '#6b7280',
                    fontSize: 12,
                    margin: 8
                },
                // 显示纵轴轴线
                    axisLine: {
                        show: true, // 显示轴线
                        lineStyle: {
                            color: '#e5e7eb', // 轴线颜色
                            width: 1 // 轴线宽度
                        }
                    },
                    // 显示纵轴刻度线
                    axisTick: {
                        show: true, // 显示刻度线
                        lineStyle: {
                            color: '#e5e7eb' // 刻度线颜色
                        }
                    },
            },

            series: [
                {
                    name: '高级专家',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSenior,  // 使用排序后的高级专家数据
                    itemStyle: {
                        color: chartColors.primary,
                        borderRadius: [4, 4, 0, 0]
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(30, 136, 229, 0.3)'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: 12
                    }
                },
                {
                    name: '中级专家',
                    type: 'bar',
                    stack: 'total',
                    data: sortedIntermediate,  // 使用排序后的中级专家数据
                    itemStyle: {
                        color: chartColors.primaryLight,
                        borderRadius: [0, 0, 0, 0]
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(100, 181, 246, 0.3)'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: 12
                    }
                },
                {
                    name: '后备专家',
                    type: 'bar',
                    stack: 'total',
                    data: sortedReserve,  // 使用排序后的后备专家数据
                    itemStyle: {
                        color: chartColors.primaryLighter,
                        borderRadius: [0, 0, 4, 4]
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(187, 222, 251, 0.3)'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 11
                    }
                }
            ]
        };
        talentStructureChart.setOption(talentStructureOption);
        console.log('人才梯队建设图表初始化成功');
        
        // 打印排序结果供参考
        console.log('专家总人数排序结果：');
        totalExperts.forEach(function(item, index) {
            console.log(`${index + 1}. ${item.name}: ${item.total}人 (高级:${item.senior}, 中级:${item.intermediate}, 后备:${item.reserve})`);
        });
    }
} catch (error) {
    console.error('人才梯队建设图表初始化失败:', error);
}
    
// 初始化专家晋级降级图表
try {
    var expertChangeChartDom = document.getElementById('expertChangeChart');
    if (expertChangeChartDom) {
        var expertChangeChart = echarts.init(expertChangeChartDom);
        
        // 数据源 - 根据您提供的图片整理
        var expertChangeData = [
            { name: '测绘一院', promotion: 0, demotion: 0 },
            { name: '滨海院', promotion: 0, demotion: 3 },
            { name: '测绘二院', promotion: 1, demotion: 0 },
            { name: '测绘四院', promotion: 1, demotion: 0 },
            { name: '基础测绘院', promotion: 0, demotion: 1 },
            { name: '测绘七院', promotion: 0, demotion: 0 },
            { name: '测绘八院', promotion: 1, demotion: 0 },
            { name: '信息工程院', promotion: 1, demotion: 1 },
            { name: '调查监测院', promotion: 0, demotion: 1 },
            { name: '海洋院', promotion: 0, demotion: 0 },
            { name: '技术研发中心', promotion: 0, demotion: 1 }
        ];
        
        // 按分院名称排序（根据您图片中的顺序，从下到上）
        var sortedData = expertChangeData.slice().reverse();
        
        // 蓝色系颜色配置
        var blueColors = {
            promotion: '#2196F3',      // 晋级 - 亮蓝色
            demotion: '#64B5F6',       // 降级 - 浅蓝色
            name: '#6b7280'            // 分院名称颜色
        };
        
        // 准备晋级系列数据
        var promotionSeriesData = [];
        var demotionSeriesData = [];
        
        sortedData.forEach(function(item) {
            if (item.promotion > 0) {
                // 有晋级数据：名称显示在左侧
                promotionSeriesData.push({
                    value: item.promotion,
                    label: {
                        position: 'left',
                        show: true,
                        formatter: item.name,
                        color: blueColors.name,
                        fontSize: 12
                    }
                });
                demotionSeriesData.push(0);
            } else if (item.demotion > 0) {
                // 有降级数据：名称显示在右侧
                demotionSeriesData.push({
                    value: -item.demotion,
                    label: {
                        position: 'right',
                        show: true,
                        formatter: item.name,
                        color: blueColors.name,
                       
                        fontSize: 12
                    }
                });
                promotionSeriesData.push(0);
            } else {
                // 两者都为0：名称显示在右侧
                demotionSeriesData.push({
                    value: 0,
                    label: {
                        position: 'right',
                        show: true,
                        formatter: item.name,
                        color: blueColors.name,
                    
                        fontSize: 12
                    }
                });
                promotionSeriesData.push(0);
            }
        });
        
        var expertChangeOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#6b7280'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var promotionItem = params[0];
                    var demotionItem = params[1];
                    var promotionValue = promotionItem.value;
                    var demotionValue = demotionItem.value;
                    
                    // 获取分院名称
                    var categoryName = sortedData[promotionItem.dataIndex].name;
                    
                    var result = '<div style="font-weight: bold; margin-bottom: 8px; font-size: 14px;">' + categoryName + '</div>';
                    
                    // 晋级数据
                    if (promotionValue > 0) {
                        result += '<div style="display: flex; align-items: center; justify-content: space-between; margin: 4px 0;">';
                        result += '<span>' + promotionItem.marker + '<span style="color: #2196F3">晋级</span></span>';
                        result += '<span style="font-weight: bold; color: #2196F3; margin-left: 20px;">+' + promotionValue + '人</span>';
                        result += '</div>';
                    }
                    
                    // 降级/淘汰数据
                    if (demotionValue < 0) {
                        result += '<div style="display: flex; align-items: center; justify-content: space-between; margin: 4px 0;">';
                        result += '<span>' + demotionItem.marker + '<span style="color: #64B5F6">降级/淘汰</span></span>';
                        result += '<span style="font-weight: bold; color: #64B5F6; margin-left: 20px;">' + demotionValue + '人</span>';
                        result += '</div>';
                    }
                    
                    // 如果两者都是0，显示无变化
                    if (promotionValue === 0 && demotionValue === 0) {
                        result += '<div style="display: flex; align-items: center; justify-content: space-between; margin: 4px 0;">';
                        result += '<span>暂无变化</span>';
                        result += '<span style="font-weight: bold; color: #9E9E9E; margin-left: 20px;">0人</span>';
                        result += '</div>';
                    }
                    
                    return result;
                }
            },
            legend: {
                data: [
                    { name: '晋级', textStyle: { color: '#6b7280' } },
                    { name: '降级/淘汰', textStyle: { color: '#6b7280' } }
                ],
                bottom: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#6b7280'
                },
               
            },
            grid: {
                left: '5%',      // 减少左边距，让图表更宽
                right: '5%',     // 减少右边距
                bottom: '10%',   // 减少下边距
                top: '10%',       // 减少上边距
                containLabel: false
            },
            xAxis: {
                type: 'value',
                position: 'top',
                name: '人数变化',
                nameLocation: 'middle',
                nameGap: 25,
                nameTextStyle: {
                    color: '#6b7280',
                    fontSize: 12
                },
                axisLabel: {
                    formatter: function(value) {
                        // 显示正负数，0只显示0
                        if (value > 0) {
                            return '+' + value;
                        } else if (value < 0) {
                            return value.toString();
                        } else {
                            return '0';
                        }
                    },
                    color: '#6b7280',
                    fontSize: 12
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'dashed'
                    }
                },
                // 对称轴，显示正负数
                min: -4,
                max: 4,
                interval: 1
            },
            yAxis: {
                type: 'category',
                axisLine: { 
                    show: false 
                },
                axisLabel: { 
                    show: false 
                },
                axisTick: { 
                    show: false 
                },
                splitLine: { 
                    show: false 
                },
                data: sortedData.map(item => item.name)
            },
            series: [
    {
        name: '晋级',
        type: 'bar',
        stack: 'Total',
        data: promotionSeriesData,
        itemStyle: {
            color: blueColors.promotion,
            borderRadius: [0, 4, 4, 0]
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 8,
                shadowColor: 'rgba(33, 150, 243, 0.3)'
            }
        },
        barWidth: '70%',
        label: {
            show: true,
            position: 'insideRight', // 在条形图内部右侧居中
            formatter: function(params) {
                return params.value > 0 ? '+' + params.value : '';
            },
            color: '#ffffff',
            fontSize: 12
        }
    },
    {
        name: '降级/淘汰',
        type: 'bar',
        stack: 'Total',
        data: demotionSeriesData,
        itemStyle: {
            color: blueColors.demotion,
            borderRadius: [4, 0, 0, 4]
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 8,
                shadowColor: 'rgba(100, 181, 246, 0.3)'
            }
        },
        barWidth: '70%',
        label: {
            show: true,
            position: 'insideLeft', // 在条形图内部左侧居中
            formatter: function(params) {
                return params.value < 0 ? params.value : '';
            },
            color: '#ffffff',
            fontSize: 12
        }
    }
],
            // 添加0刻度线
            graphic: [
                {
                    type: 'line',
                    left: '50%',
                    top: '3%',
                    bottom: '10%',
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: '100%'
                    },
                    style: {
                        stroke: '#9E9E9E',
                        lineWidth: 1,
                        lineDash: [4, 4]
                    },
                    z: 0
                }
            ]
        };
        
        expertChangeChart.setOption(expertChangeOption);
        console.log('专家晋级降级图表初始化成功');
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            expertChangeChart.resize();
        });
    }
} catch (error) {
    console.error('专家晋级降级图表初始化失败:', error);
}

// 技术团队综合情况分析图 - 完善样式
console.log('开始初始化技术团队分析图表...');

try {
    var teamAnalysisChartDom = document.getElementById('teamAnalysisChart');
    console.log('图表DOM元素:', teamAnalysisChartDom);
    
    if (teamAnalysisChartDom) {
        console.log('DOM元素已找到，开始初始化echarts...');
        
        // 检查echarts是否已加载
        if (typeof echarts === 'undefined') {
            console.error('ECharts未加载！');
            teamAnalysisChartDom.innerHTML = '<div style="color: red; padding: 20px; text-align: center;">ECharts库未加载，请检查CDN链接</div>';
            return;
        }
        
        var teamAnalysisChart = echarts.init(teamAnalysisChartDom);
        console.log('ECharts实例已创建:', teamAnalysisChart);
        
        // 数据部分保持不变...
        var teamData = [
            { name: '测绘一院', members: 6, committee: 1, teamCount: 1, avgAge: 35 },
            { name: '滨海院', members: 0, committee: 1, teamCount: 0, avgAge: null },
            { name: '测绘三院', members: 13, committee: 2, teamCount: 1, avgAge: 37 },
            { name: '测绘四院', members: 7, committee: 1, teamCount: 1, avgAge: 40 },
            { name: '基础测绘院', members: 6, committee: 1, teamCount: 1, avgAge: 37 },
            { name: '测绘七院', members: 6, committee: 0, teamCount: 1, avgAge: 32 },
            { name: '测绘八院', members: 7, committee: 0, teamCount: 1, avgAge: 32 },
            { name: '信息工程院', members: 17, committee: 1, teamCount: 1, avgAge: 39 },
            { name: '调查监测院', members: 10, committee: 1, teamCount: 1, avgAge: 41 },
            { name: '海洋院', members: 0, committee: 0, teamCount: 0, avgAge: null },
            { name: '技术研发中心', members: 7, committee: 0, teamCount: 1, avgAge: 33 }
        ];
        
        console.log('数据已准备:', teamData);
        
        // 按团队成员人数排序（降序）
        teamData.sort((a, b) => b.members - a.members);
        
        var categories = teamData.map(item => item.name);
        var memberData = teamData.map(item => item.members);
        var committeeData = teamData.map(item => item.committee);
        var teamCountData = teamData.map(item => item.teamCount);
        var avgAgeData = teamData.map(item => item.avgAge || 0);
        
        // 完善样式配置
        var teamAnalysisOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var html = '<div style="font-weight: bold; margin-bottom: 8px; font-size: 14px; color: #374151;">' + params[0].name + '</div>';
                    
                    // 团队成员人数
                    var members = params[0].value;
                    if (members > 0) {
                        html += '<div style="display: flex; justify-content: space-between; margin: 6px 0; align-items: center;">';
                        html += '<div style="display: flex; align-items: center;">';
                        html += '<span style="display: inline-block; width: 8px; height: 8px; background-color: #4f46e5; border-radius: 2px; margin-right: 8px;"></span>';
                        html += '<span style="font-size: 13px; color: #6b7280;">团队成员人数</span>';
                        html += '</div>';
                        html += '<span style="font-weight: bold; font-size: 13px; color: #4f46e5;">' + members + '人</span>';
                        html += '</div>';
                    }
                    
                    // 技术委员会委员
                    var committeeValue = committeeData[params[0].dataIndex];
                    if (committeeValue > 0) {
                        html += '<div style="display: flex; justify-content: space-between; margin: 6px 0; align-items: center;">';
                        html += '<div style="display: flex; align-items: center;">';
                        html += '<span style="display: inline-block; width: 8px; height: 8px; background-color: #ef4444; transform: rotate(45deg); margin-right: 8px;"></span>';
                        html += '<span style="font-size: 13px; color: #6b7280;">技术委员会委员</span>';
                        html += '</div>';
                        html += '<span style="font-weight: bold; font-size: 13px; color: #ef4444;">' + committeeValue + '人</span>';
                        html += '</div>';
                    }
                    
                    // 团队数量
                    var teamCountValue = teamCountData[params[0].dataIndex];
                    if (teamCountValue > 0) {
                        html += '<div style="display: flex; justify-content: space-between; margin: 6px 0; align-items: center;">';
                        html += '<div style="display: flex; align-items: center;">';
                        html += '<span style="display: inline-block; width: 8px; height: 8px; background-color: #f59e0b; border-radius: 2px; margin-right: 8px;"></span>';
                        html += '<span style="font-size: 13px; color: #6b7280;">团队数量</span>';
                        html += '</div>';
                        html += '<span style="font-weight: bold; font-size: 13px; color: #f59e0b;">' + teamCountValue + '个</span>';
                        html += '</div>';
                    }
                    
                    // 平均年龄
                    var ageValue = avgAgeData[params[0].dataIndex];
                    if (ageValue > 0) {
                        html += '<div style="display: flex; justify-content: space-between; margin: 6px 0; align-items: center;">';
                        html += '<div style="display: flex; align-items: center;">';
                        html += '<span style="display: inline-block; width: 8px; height: 8px; background-color: #10b981; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); margin-right: 8px;"></span>';
                        html += '<span style="font-size: 13px; color: #6b7280;">平均年龄</span>';
                        html += '</div>';
                        html += '<span style="font-weight: bold; font-size: 13px; color: #10b981;">' + ageValue + '岁</span>';
                        html += '</div>';
                    }
                    
                    return html;
                }
            },
            legend: {
                data: ['团队成员人数', '平均年龄', '技术委员会委员', '团队数量'],
                bottom: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#6b7280'
                },
                itemWidth: 12,
                itemHeight: 12,
                icon: 'rect'
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '5%',
                top: '5%', // 增加顶部空间给纵轴标题
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: categories,
                axisLabel: {
                    interval: 0,
                    rotate: 45,
                    fontSize: 12,
                    color: '#6b7280'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: [
                {
                    type: 'value',
                    name: '人数',
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        align: 'right',
                        verticalAlign: 'top',
                        padding: [2, 0, 0, 0]
                    },
                    axisLabel: {
                        fontSize: 12,
                        color: '#6b7280'
                    },
                    nameGap: 20, // 标题与轴顶部的距离
                    splitLine: {
                        lineStyle: {
                            color: '#f3f4f6',
                            type: 'dashed'
                        }
                    },

                    // 显示纵轴轴线
                    axisLine: {
                        show: true, // 显示轴线
                        lineStyle: {
                            color: '#e5e7eb', // 轴线颜色
                            width: 1 // 轴线宽度
                        }
                    },
                    // 显示纵轴刻度线
                    axisTick: {
                        show: true, // 显示刻度线
                        lineStyle: {
                            color: '#e5e7eb' // 刻度线颜色
                        }
                    },
                    min: 0,
                    max: 20
                },
                {
                    type: 'value',
                    name: '平均年龄',
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        align: 'right',
                        verticalAlign: 'top',
                        padding: [2, 0, 0, 0]
                    },
                    axisLabel: {
                        fontSize: 12,
                        color: '#6b7280'
                    },
                    nameGap: 20, // 标题与轴顶部的距离
                    splitLine: {
                        show: false
                    },
                    // 显示纵轴轴线
                    axisLine: {
                        show: true, // 显示轴线
                        lineStyle: {
                            color: '#e5e7eb', // 轴线颜色
                            width: 1 // 轴线宽度
                        }
                    },
                    // 显示纵轴刻度线
                    axisTick: {
                        show: true, // 显示刻度线
                        lineStyle: {
                            color: '#e5e7eb' // 刻度线颜色
                        }
                    },
                    min: 0,
                    max: 50,
                    interval: 10
                }
            ],
            series: [
                {
                    name: '团队成员人数',
                    type: 'bar',
                    data: memberData,
                    itemStyle: {
                        color: '#1e88e5',
                        borderRadius: [4, 4, 0, 0]
                    },
                    barWidth: '55%',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function(params) {
                            return params.value > 0 ? params.value + '人' : '';
                        },
                        color: '#1e88e5',
                        fontWeight: 'bold',
                        fontSize: 12,
                        padding: [2, 4]
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(79, 70, 229, 0.3)'
                        }
                    }
                },
                {
                    name: '平均年龄',
                    type: 'line',
                    yAxisIndex: 1,
                    data: avgAgeData,
                    symbol: 'emptyTriangle',
                    symbolSize: 8,
                    lineStyle: {
                        color: '#10b981',
                        width: 2
                    },
                    itemStyle: {
                        color: '#10b981'
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function(params) {
                            return params.value > 0 ? params.value + '岁' : '';
                        },
                        color: '#10b981',
                        fontWeight: 'bold',
                        fontSize: 11,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: [2, 4],
                        borderRadius: 4
                    },
                    emphasis: {
                        lineStyle: {
                            width: 3
                        }
                    }
                },
                {
                    name: '技术委员会委员',
                    type: 'scatter',
                    data: teamData.map((item, index) => {
                        // 将委员会人数放在柱状图中间位置显示
                        var yPosition = item.members / 2; // 柱状图高度的中间
                        return [index, yPosition];
                    }),
                    symbol: 'diamond',
                    symbolSize: function(value) {
                        var committeeCount = committeeData[value[0]] || 0;
                        // 根据委员会人数调整标记大小
                        return committeeCount > 0 ? committeeCount * 12 : 0;
                    },
                    itemStyle: {
                        color: '#ef4444'
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            var committeeCount = committeeData[params.dataIndex] || 0;
                            return committeeCount > 0 ? committeeCount + '人' : '';
                        },
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: 10
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(239, 68, 68, 0.3)'
                        }
                    }
                },
                {
                    name: '团队数量',
                    type: 'line',
                    yAxisIndex: 0,
                    data: teamCountData,
                    symbol: 'circle',
                    symbolSize: 6,
                    lineStyle: {
                        color: '#f59e0b',
                        width: 2,
                        type: 'dashed'
                    },
                    itemStyle: {
                        color: '#f59e0b'
                    },
                    label: {
                        show: true,
                        position: 'bottom',
                        formatter: function(params) {
                            return params.value > 0 ? params.value + '个' : '';
                        },
                        color: '#f59e0b',
                        fontWeight: 'bold',
                        fontSize: 11
                    },
                    emphasis: {
                        lineStyle: {
                            width: 3
                        }
                    }
                }
            ]
        };
        
        console.log('正在设置图表选项...');
        teamAnalysisChart.setOption(teamAnalysisOption);
        console.log('图表选项已设置');
        
        // 检查图表是否渲染成功
        setTimeout(() => {
            var canvas = teamAnalysisChartDom.querySelector('canvas');
            console.log('Canvas元素:', canvas);
            if (!canvas) {
                console.error('图表未渲染出canvas元素');
                teamAnalysisChartDom.innerHTML += '<div style="color: red; padding: 10px; margin-top: 20px; background-color: #fee; border-radius: 4px; font-size: 14px;">图表渲染失败，请检查控制台错误</div>';
            } else {
                console.log('图表渲染成功！Canvas尺寸:', canvas.width, 'x', canvas.height);
                // 添加成功提示
                var successMsg = document.createElement('div');
                successMsg.style.cssText = 'color: #10b981; padding: 8px; margin-top: 10px; background-color: #f0fdf4; border-radius: 4px; font-size: 14px; display: none;';
                successMsg.textContent = '技术团队分析图表加载成功';
                teamAnalysisChartDom.appendChild(successMsg);
                setTimeout(() => successMsg.style.display = 'block', 100);
                setTimeout(() => successMsg.style.display = 'none', 2000);
            }
        }, 100);
        
        window.addEventListener('resize', function() {
            teamAnalysisChart.resize();
        });
        
    } else {
        console.error('未找到ID为teamAnalysisChart的元素！');
        // 在页面中添加错误提示
        var errorContainer = document.createElement('div');
        errorContainer.style.cssText = 'background-color: #fee; border: 2px solid #f99; padding: 20px; border-radius: 8px; margin: 20px;';
        errorContainer.innerHTML = `
            <h3 style="color: #d00; margin-top: 0;">图表容器未找到</h3>
            <p>未找到ID为"teamAnalysisChart"的图表容器元素</p>
            <p>请检查HTML结构是否正确</p>
        `;
        document.body.appendChild(errorContainer);
    }
} catch (error) {
    console.error('图表初始化错误:', error);
    console.error('错误堆栈:', error.stack);
    
    if (teamAnalysisChartDom) {
        teamAnalysisChartDom.innerHTML = `
            <div style="background-color: #fee; border: 2px solid #f99; padding: 20px; border-radius: 8px;">
                <h3 style="color: #d00; margin-top: 0;">图表加载失败</h3>
                <p><strong>错误信息:</strong> ${error.message}</p>
                <p>请检查浏览器控制台查看详细错误信息</p>
            </div>
        `;
    }
}
    
// 初始化学历分布图表（堆叠柱状图）
try {
    var educationChartDom = document.getElementById('educationChart');
    if (educationChartDom) {
        var educationChart = echarts.init(educationChartDom);
        
        // 原始数据
        var departments = ['技术研发中心', '信息工程院', '调查监测院', '海洋院', '测绘八院', '测绘七院', '基础测绘院', '测绘四院', '测绘三院', '滨海院', '测绘一院'];
        var doctorData = [2, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0];
        var masterData = [5, 15, 8, 0, 6, 5, 6, 6, 11, 0, 0];
        
        // 计算总人数并排序
        var departmentData = departments.map(function(dept, index) {
            return {
                name: dept,
                doctor: doctorData[index],
                master: masterData[index],
                total: doctorData[index] + masterData[index]
            };
        });
        
        // 按总人数从大到小排序
        departmentData.sort(function(a, b) {
            return b.total - a.total;
        });
        
        // 提取排序后的数据
        var sortedDepartments = departmentData.map(function(item) {
            return item.name;
        });
        
        var sortedDoctorData = departmentData.map(function(item) {
            return item.doctor;
        });
        
        var sortedMasterData = departmentData.map(function(item) {
            return item.master;
        });
        
        var educationOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var result = params[0].axisValue + '<br/>';
                    var total = 0;
                    
                    params.forEach(function(item) {
                        result += '<div style="display: flex; align-items: center; margin: 4px 0;">';
                        result += '<span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ' + item.color + '; margin-right: 8px;"></span>';
                        result += item.seriesName + ': ' + item.value;
                        result += '</div>';
                        total += item.value;
                    });
                    
                    result += '<hr style="margin: 8px 0; border: none; border-top: 1px solid #e5e7eb;" />';
                    result += '<div style="font-weight: bold;">总人数: ' + total + '</div>';
                    
                    return result;
                }
            },
            legend: {
                data: ['博士', '硕士'],
                bottom: '2%',
                textStyle: {
                    fontSize: 12,
                    color: '#6b7280'
                },
                itemWidth: 12,
                itemHeight: 12
            },
            grid: {
                left: '8%',
                right: '1%',
                bottom: '5%',
                top: '8%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: sortedDepartments,
                axisLabel: {
                    interval: 0,
                    rotate: 45,
                    fontSize: 12,
                    color: '#6b7280'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '人数',
                nameLocation: 'end',
                nameTextStyle: {
                    color: '#6b7280',
                    fontSize: 12,
                    align: 'right'
                },
                max: 16, // 调整最大值为28以适应堆叠显示
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: '博士',
                    type: 'bar',
                    stack: '学历', // 设置堆叠分组
                    data: sortedDoctorData,
                    itemStyle: {
                        color: '#0d47a1', // 深蓝
                        borderRadius: [4, 4, 0, 0]
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(13, 71, 161, 0.3)'
                        }
                    },
                    label: {
                        show: true,
                        position: 'insideTop', // 堆叠柱状图内部显示
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 'bold',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        }
                    }
                },
                {
                    name: '硕士',
                    type: 'bar',
                    stack: '学历', // 设置相同堆叠分组
                    data: sortedMasterData,
                    itemStyle: {
                        color: '#1e88e5', // 主蓝
                        borderRadius: [4, 4, 0, 0]
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(30, 136, 229, 0.3)'
                        }
                    },
                    label: {
                        show: true,
                        position: 'insideTop', // 堆叠柱状图内部显示
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 'bold',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        }
                    }
                }
            ]
        };
        
        educationChart.setOption(educationOption);
        
        // 监听窗口大小变化
        window.addEventListener('resize', function() {
            educationChart.resize();
        });
        
        console.log('学历分布图表（堆叠柱状图）初始化成功');
    }
} catch (error) {
    console.error('学历分布图表初始化失败:', error);
}
   
// 初始化人才队伍整体情况图表（基于现有数据）
try {
    var talentOverviewChartDom = document.getElementById('talentOverviewChart');
    if (talentOverviewChartDom) {
        var talentOverviewChart = echarts.init(talentOverviewChartDom);
        
        // 根据您提供的数据构建
        var talentData = [
            { name: '技术研发中心', value: 7 },
            { name: '信息工程院', value: 6 },
            { name: '测绘一院', value: 7 },
            { name: '测绘三院', value: 5 },
            { name: '调查监测院', value: 2 },
            { name: '基础测绘院', value: 2 },
            { name: '滨海院', value: 1 },
            { name: '测绘七院', value: 1 },
            { name: '测绘八院', value: 1 },
            { name: '金宇公司', value: 1 }
        ];
        
        // 按数量从大到小排序
        talentData.sort((a, b) => b.value - a.value);
        
        var departments = talentData.map(item => item.name);
        var values = talentData.map(item => item.value);
        
        var talentOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var department = params[0].name;
                    var value = params[0].value;
                    
                    // 根据数量给予评级
                    var level = '';
                    if (value >= 6) {
                        level = '<span style="color: #10b981; font-weight: bold;">（规模较大）</span>';
                    } else if (value >= 3) {
                        level = '<span style="color: #f59e0b; font-weight: bold;">（规模中等）</span>';
                    } else {
                        level = '<span style="color: #ef4444; font-weight: bold;">（规模较小）</span>';
                    }
                    
                    return `<div style="font-weight: bold; margin-bottom: 8px; font-size: 14px;">${department}</div>
                           <div style="display: flex; justify-content: space-between; align-items: center;">
                               <span style="color: #6b7280;">人才数量：</span>
                               <span style="font-weight: bold; color: #1e88e5; font-size: 16px;">${value}人</span>
                           </div>
                           <div style="margin-top: 6px;">${level}</div>`;
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '8%',
                top: '8%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: departments,
                axisLabel: {
                    interval: 0,
                    rotate: 45,
                    fontSize: 12,
                    color: '#6b7280'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '人才数量（人）',
                nameTextStyle: {
                    color: '#6b7280',
                    fontSize: 12,
                },
                min: 0,
                max: 8,
                interval: 1,
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#6b7280',
                    fontSize: 12,
                    margin: 8
                }
            },
            series: [
                {
                    name: '人才数量',
                    type: 'bar',
                    data: values,
                    itemStyle: {
                        color: '#1e88e5', // 统一使用蓝色
                        borderRadius: [4, 4, 0, 0]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}人',
                        color: '#374151',
                        fontSize: 12,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(30, 136, 229, 0.3)'
                        }
                    },
                    barWidth: '60%'
                }
            ]
        };
        
        talentOverviewChart.setOption(talentOption);
        console.log('人才队伍整体情况图表初始化成功');
        
        window.addEventListener('resize', function() {
            talentOverviewChart.resize();
        });
    }
} catch (error) {
    console.error('人才队伍整体情况图表初始化失败:', error);
}

// 初始化创新平台堆叠柱状图
try {
    var innovationPlatformsChartDom = document.getElementById('innovationPlatformsChart');
    if (innovationPlatformsChartDom) {
        var innovationPlatformsChart = echarts.init(innovationPlatformsChartDom);
        
        // 原始平台数据
        var platformData = [
            {
                name: '天津市时空信息工程技术实验室',
                dept: '技术研发中心',
                level: '市级',
                type: '实验室'
            },
            {
                name: '天津市卫星技术应用中心',
                dept: '调查监测院',
                level: '市级',
                type: '技术中心'
            },
            {
                name: '黄渤海滨海自然保护地监控体系国家创新联盟',
                dept: '技术研发中心',
                level: '国家级',
                type: '创新联盟'
            }
        ];
        
        // 按部门统计平台数据
        var deptStats = {};
        platformData.forEach(function(platform) {
            if (!deptStats[platform.dept]) {
                deptStats[platform.dept] = {
                    name: platform.dept,
                    total: 0,
                    national: 0, // 国家级
                    municipal: 0, // 市级
                    platforms: []
                };
            }
            deptStats[platform.dept].total++;
            deptStats[platform.dept].platforms.push(platform);
            
            if (platform.level === '国家级') {
                deptStats[platform.dept].national++;
            } else {
                deptStats[platform.dept].municipal++;
            }
        });
        
        // 转换为数组并按平台数量排序
        var deptArray = Object.values(deptStats);
        deptArray.sort(function(a, b) {
            return b.total - a.total;
        });
        
        // 计算最大平台数量
        var maxPlatformCount = Math.max(...deptArray.map(dept => dept.total));
        
        // 提取数据用于图表
        var deptNames = deptArray.map(function(dept) {
            return dept.name;
        });
        
        var nationalData = deptArray.map(function(dept) {
            return dept.national;
        });
        
        var municipalData = deptArray.map(function(dept) {
            return dept.municipal;
        });
        
        var innovationPlatformsOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params) {
                    var deptName = params[0].name;
                    var deptInfo = deptArray.find(d => d.name === deptName);
                    var result = '<div style="font-weight:bold;margin-bottom:5px">' + deptName + '</div>';
                    var total = 0;
                    
                    params.forEach(function(param) {
                        result += param.marker + param.seriesName + ': ' + param.value + '个<br/>';
                        total += param.value;
                    });
                    
                    result += '<b>总计: ' + total + '个平台</b><br/><br/>';
                    
                    if (deptInfo && deptInfo.platforms.length > 0) {
                        result += '<div style="font-size:11px;color:#6b7280">平台列表:</div>';
                        deptInfo.platforms.forEach(function(platform) {
                            result += '<div style="font-size:11px">• ' + platform.name + ' (' + platform.level + ')</div>';
                        });
                    }
                    
                    return result;
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px; max-width: 300px;'
            },
            legend: {
                data: ['国家级平台', '市级平台'],
                top: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#6b7280'
                },
                itemWidth: 12,
                itemHeight: 12
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                top: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: deptNames,
                axisLabel: {
                    fontSize: 12,
                    color: '#6b7280',
                    interval: 0,
                    rotate: 0
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name: '数量（个）',
                nameTextStyle: {
                    color: '#6b7280',
                    fontSize: 12
                },
                min: 0,
                max: Math.max(2, maxPlatformCount), // 确保至少显示到2，给点空间
                interval: 1, // 关键：设置间隔为1
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    fontSize: 12,
                    color: '#6b7280',
                    formatter: function(value) {
                        // 确保只显示整数
                        return Math.floor(value) === value ? value : '';
                    }
                }
            },
            series: [
                {
                    name: '国家级平台',
                    type: 'bar',
                    stack: 'total',
                    barWidth: '60%',
                    data: nationalData,
                    itemStyle: {
                        color: '#1565c0', // 紫色表示国家级
                        borderRadius: [4, 4, 0, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(142, 36, 170, 0.3)'
                        }
                    }
                },
                {
                    name: '市级平台',
                    type: 'bar',
                    stack: 'total',
                    barWidth: '60%',
                    data: municipalData,
                    itemStyle: {
                        color: '#1e88e5', // 蓝色表示市级
                        borderRadius: [4, 4, 0, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(30, 136, 229, 0.3)'
                        }
                    }
                }
            ]
        };
        
        innovationPlatformsChart.setOption(innovationPlatformsOption);
        console.log('创新平台堆叠柱状图初始化成功');
        
        // 创建悬浮窗口容器
        var tooltipContainer = document.createElement('div');
        tooltipContainer.style.cssText = `
            position: absolute;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            max-width: 320px;
            z-index: 1000;
            display: none;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        `;
        document.body.appendChild(tooltipContainer);
        
        // 点击柱状图显示悬浮窗口
        innovationPlatformsChart.on('click', function(params) {
            if (params.componentType === 'series' && params.seriesType === 'bar') {
                var deptName = params.name;
                var deptInfo = deptArray.find(d => d.name === deptName);
                
                if (deptInfo && deptInfo.platforms.length > 0) {
                    // 构建悬浮窗口内容
                    var content = `
                        <div style="margin-bottom: 12px;">
                            <div style="font-weight: bold; font-size: 14px; color: #1f2937; margin-bottom: 4px;">
                                ${deptName} - 创新平台详情
                            </div>
                            <div style="font-size: 12px; color: #6b7280;">
                                共有 ${deptInfo.total} 个平台
                            </div>
                        </div>
                    `;
                    
                    deptInfo.platforms.forEach(function(platform, index) {
                        var levelColor = platform.level === '国家级' ? '#8e24aa' : '#1e88e5';
                        content += `
                            <div style="margin-bottom: ${index < deptInfo.platforms.length - 1 ? '12px' : '0'}; padding: 12px; background: #f8fafc; border-radius: 6px; border-left: 3px solid ${levelColor};">
                                <div style="font-weight: 600; font-size: 13px; color: #1f2937; margin-bottom: 4px;">
                                    ${platform.name}
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 11px; color: #6b7280;">
                                        ${platform.type}
                                    </span>
                                    <span style="font-size: 11px; color: white; background: ${levelColor}; padding: 2px 8px; border-radius: 10px;">
                                        ${platform.level}
                                    </span>
                                </div>
                            </div>
                        `;
                    });
                    
                    tooltipContainer.innerHTML = content;
                    
                    // 获取点击位置
                    var event = params.event;
                    var chartRect = innovationPlatformsChartDom.getBoundingClientRect();
                    
                    // 计算悬浮窗口位置
                    var left = event.event.clientX - chartRect.left + 20;
                    var top = event.event.clientY - chartRect.top - 100;
                    
                    // 确保悬浮窗口在图表容器内
                    if (left + 320 > chartRect.width) {
                        left = event.event.clientX - chartRect.left - 340;
                    }
                    
                    if (top + tooltipContainer.offsetHeight > chartRect.height) {
                        top = event.event.clientY - chartRect.top - tooltipContainer.offsetHeight - 10;
                    }
                    
                    tooltipContainer.style.left = left + 'px';
                    tooltipContainer.style.top = top + 'px';
                    tooltipContainer.style.display = 'block';
                    
                    // 点击其他地方关闭悬浮窗口
                    setTimeout(function() {
                        var closeHandler = function(e) {
                            if (!tooltipContainer.contains(e.target) && e.target !== innovationPlatformsChartDom) {
                                tooltipContainer.style.display = 'none';
                                document.removeEventListener('click', closeHandler);
                            }
                        };
                        document.addEventListener('click', closeHandler);
                    }, 0);
                }
            }
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            innovationPlatformsChart.resize();
            tooltipContainer.style.display = 'none';
        });
    }
} catch (error) {
    console.error('创新平台图表初始化失败:', error);
}


// 初始化创新项目投入图表（更新后数据）
try {
    var innovationProjectsChartDom = document.getElementById('innovationProjectsChart');
    if (innovationProjectsChartDom) {
        var innovationProjectsChart = echarts.init(innovationProjectsChartDom);
        
        // 根据表格数据整理（注意：表格中缺少测绘二院、信息工程院的部分数据，这里保留原数据的测绘二院）
        var categories = ['调查监测院', '海洋院', '基础测绘院', '测绘三院', '信息工程院', '测绘七院', '滨海院', '测绘四院', '测绘八院', '测绘一院', '技术研发中心'];
        
        // 根据表格数据整理，缺失的数据用0填充
        var seriesData = {
            '地理信息系统工程': [4, 7, 3, 36, 61, 19, 8, 9, 14, 12, 12],
            '调查类': [37, 9, 25, 25, 3, 7, 24, 17, 1, 7, 0],
            '监测类': [27, 7, 2, 2, 1, 0, 0, 3, 0, 0, 0],
            '检测类': [0, 19, 28, 1, 1, 1, 1, 0, 0, 1, 0],
            '其他测绘类': [3, 4, 2, 2, 5, 7, 4, 6, 3, 4, 1],
            '导航电子地图制作': [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
        };
        
        // 计算每个分院的总数
        var totalByCategory = [];
        for (var i = 0; i < categories.length; i++) {
            var total = 0;
            for (var seriesName in seriesData) {
                total += seriesData[seriesName][i];
            }
            totalByCategory.push({
                name: categories[i],
                total: total,
                index: i
            });
        }
        
        // 按照总数从大到小排序
        totalByCategory.sort(function(a, b) {
            return b.total - a.total;
        });
        
        // 获取排序后的分院名称
        var sortedCategories = totalByCategory.map(function(item) {
            return item.name;
        });
        
        // 重新组织数据，按照排序后的顺序
        var sortedSeriesData = {};
        for (var seriesName in seriesData) {
            sortedSeriesData[seriesName] = [];
            for (var j = 0; j < totalByCategory.length; j++) {
                var originalIndex = totalByCategory[j].index;
                sortedSeriesData[seriesName].push(seriesData[seriesName][originalIndex]);
            }
        }
        
        var innovationProjectsOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params) {
                    var result = params[0].name + '<br/>';
                    var total = 0;
                    for (var i = 0; i < params.length; i++) {
                        if (params[i].value > 0) { // 只显示有数据的系列
                            result += params[i].marker + params[i].seriesName + ': ' + params[i].value + '项<br/>';
                            total += params[i].value;
                        }
                    }
                    result += '<b>总计: ' + total + '项</b>';
                    return result;
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;'
            },
            legend: {
                data: ['地理信息系统工程', '调查类', '监测类', '检测类', '其他测绘类', '导航电子地图制作'],
                top: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#6b7280'
                },
                itemWidth: 12,
                itemHeight: 12
            },
            grid: {
                left: '1%',
                right: '3%',
                bottom: '5%',
                top: '8%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                name: '合同数量（项）',
                nameLocation: 'middle',
                nameGap: 25,
                nameTextStyle: {
                    color: '#6b7280',
                    fontSize: 12
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    fontSize: 12,
                    color: '#6b7280'
                }
            },
            yAxis: {
                type: 'category',
                data: sortedCategories, // 使用排序后的分院名称
                axisLabel: {
                    interval: 0,
                    fontSize: 12,
                    color: '#6b7280'
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            series: [
                {
                    name: '地理信息系统工程',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSeriesData['地理信息系统工程'],
                    itemStyle: {
                        color: '#1565c0', // 深蓝色
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 8,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(21, 101, 192, 0.3)'
                        }
                    }
                },
                {
                    name: '调查类',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSeriesData['调查类'],
                    itemStyle: {
                        color: '#1e88e5', // 蓝色
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 8,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(30, 136, 229, 0.3)'
                        }
                    }
                },
                {
                    name: '监测类',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSeriesData['监测类'],
                    itemStyle: {
                        color: '#42a5f5', // 中蓝色
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 8,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(66, 165, 245, 0.3)'
                        }
                    }
                },
                {
                    name: '检测类',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSeriesData['检测类'],
                    itemStyle: {
                        color: '#64b5f6', // 浅蓝色
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 8,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(100, 181, 246, 0.3)'
                        }
                    }
                },
                {
                    name: '其他测绘类',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSeriesData['其他测绘类'],
                    itemStyle: {
                        color: '#90caf9', // 更浅的蓝色
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 8,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(144, 202, 249, 0.3)'
                        }
                    }
                },
                {
                    name: '导航电子地图制作',
                    type: 'bar',
                    stack: 'total',
                    data: sortedSeriesData['导航电子地图制作'],
                    itemStyle: {
                        color: '#bbdefb', // 最浅的蓝色
                        borderRadius: [0, 4, 4, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 8,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(187, 222, 251, 0.3)'
                        }
                    }
                }
            ]
        };
        innovationProjectsChart.setOption(innovationProjectsOption);
        console.log('创新项目投入图表初始化成功，已按总数从大到小排序');
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            innovationProjectsChart.resize();
        });
    }
} catch (error) {
    console.error('创新项目投入图表初始化失败:', error);
}
    
// 初始化创新技术奖项图表（竖条形图，蓝色系）
try {
    var innovationAwardsChartDom = document.getElementById('innovationAwardsChart');
    if (innovationAwardsChartDom) {
        var innovationAwardsChart = echarts.init(innovationAwardsChartDom);
        
        // 基于您提供的图片数据构建
        var awardsData = [
            { dept: '测绘三院', level: '一等奖', count: 1 },
            { dept: '技术研发中心', level: '一等奖', count: 1 },
            { dept: '信息工程院', level: '一等奖', count: 2 },
            { dept: '测绘四院', level: '三等奖', count: 1 },
            { dept: '滨海院', level: '三等奖', count: 2 },
            { dept: '海洋院', level: '三等奖', count: 2 },
            { dept: '基础测绘院', level: '三等奖', count: 1 },
            { dept: '信息工程院', level: '二等奖', count: 1 },
            { dept: '基础院', level: '二等奖', count: 1 },
            { dept: '测绘一院', level: '二等奖', count: 1 },
            { dept: '技术研发中心', level: '二等奖', count: 1 }
        ];
        
        // 统计各部门各级奖项
        var deptStats = {};
        awardsData.forEach(item => {
            if (!deptStats[item.dept]) {
                deptStats[item.dept] = {
                    dept: item.dept,
                    '一等奖': 0,
                    '二等奖': 0,
                    '三等奖': 0,
                    total: 0
                };
            }
            deptStats[item.dept][item.level] += item.count;
            deptStats[item.dept].total += item.count;
        });
        
        // 转换为数组并排序
        var deptList = Object.values(deptStats);
        deptList.sort((a, b) => b.total - a.total);
        
        // 提取数据用于图表
        var deptNames = deptList.map(item => item.dept);
        var firstPrizeData = deptList.map(item => item['一等奖']);
        var secondPrizeData = deptList.map(item => item['二等奖']);
        var thirdPrizeData = deptList.map(item => item['三等奖']);
        
        // 蓝色系颜色
        var blueColors = [
            '#1565c0', // 深蓝色 - 一等奖
            '#42a5f5', // 中等蓝色 - 二等奖
            '#90caf9'  // 浅蓝色 - 三等奖
        ];
        
        // 创建自定义标签位置函数
        var createLabelPosition = function(index, value, seriesIndex) {
            // 计算当前柱子的中间位置
            var barHeight = value * 100; // 假设每个单位占100像素
            var offset = 0;
            
            // 根据当前系列计算偏移量
            if (seriesIndex === 0) { // 一等奖
                offset = barHeight / 2;
            } else if (seriesIndex === 1) { // 二等奖
                // 二等奖的标签需要在当前柱子中间，但需要加上一等奖的高度
                var prevValue = firstPrizeData[index];
                offset = prevValue * 100 + barHeight / 2;
            } else if (seriesIndex === 2) { // 三等奖
                // 三等奖的标签需要在当前柱子中间，但需要加上一等奖和二等奖的高度
                var prevValue1 = firstPrizeData[index];
                var prevValue2 = secondPrizeData[index];
                offset = prevValue1 * 100 + prevValue2 * 100 + barHeight / 2;
            }
            
            // 转换为百分比
            return offset / (deptList[index].total * 100) * 100 + '%';
        };
        
        var innovationAwardsOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151'
                },
                padding: [12, 16],
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;',
                formatter: function(params) {
                    var deptName = params[0].name;
                    var deptInfo = deptList.find(d => d.dept === deptName);
                    
                    var result = `<div style="font-weight: bold; margin-bottom: 12px; font-size: 14px; color: #1e40af;">${deptName}</div>`;
                    var total = 0;
                    
                    // 按奖项等级排序显示（一等奖在前）
                    var sortedParams = params.sort((a, b) => {
                        var order = { '一等奖': 1, '二等奖': 2, '三等奖': 3 };
                        return order[a.seriesName] - order[b.seriesName];
                    });
                    
                    sortedParams.forEach(function(param) {
                        if (param.value > 0) {
                            result += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; padding: 4px 0;">
                                        <span style="display: flex; align-items: center;">
                                            ${param.marker}
                                            <span style="margin-left: 6px; color: #4b5563;">${param.seriesName}</span>
                                        </span>
                                        <span style="font-weight: bold; color: #1e3a8a;">${param.value}项</span>
                                      </div>`;
                            total += param.value;
                        }
                    });
                    
                    result += `<div style="margin-top: 12px; padding-top: 10px; border-top: 2px solid #e5e7eb;">
                               <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0;">
                                   <span style="color: #6b7280; font-size: 13px;">获奖总数：</span>
                                   <span style="font-weight: bold; color: #1e3a8a; font-size: 16px;">${total}项</span>
                               </div></div>`;
                    
                    return result;
                }
            },
            legend: {
                data: ['一等奖', '二等奖', '三等奖'],
                top: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#4b5563'
                },
                itemWidth: 14,
                itemHeight: 14
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '8%',
                top: '12%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: deptNames,
                axisLabel: {
                    interval: 0,
                    rotate: 45,
                    fontSize: 12,
                    color: '#4b5563',
                    margin: 15
                },
                axisLine: {
                    lineStyle: {
                        color: '#d1d5db'
                    }
                },
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value',
                name: '数量（项）',
                nameTextStyle: {
                    color: '#6b7280',
                    fontSize: 12,
                    align: 'center',
        padding: [0, 0, 0, 10] // 添加左内边距，让名称往右移动
                },
                
                min: 0,
                max: function() {
                    var maxTotal = Math.max(...deptList.map(d => d.total));
                    return Math.max(maxTotal + 1, 4);
                },
                interval: 1,
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#d1d5db'
                    }
                },
                axisLabel: {
                    color: '#6b7280',
                    fontSize: 12,
                    margin: 8
                }
            },
            series: [
                {
                    name: '一等奖',
                    type: 'bar',
                    stack: 'total',
                    data: firstPrizeData,
                    itemStyle: {
                        color: blueColors[0], // 深蓝色
                        borderRadius: [4, 4, 0, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        textBorderColor: 'rgba(0, 0, 0, 0.3)',
                        textBorderWidth: 1
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 8,
                            shadowColor: 'rgba(21, 101, 192, 0.4)',
                            opacity: 0.9
                        }
                    },
                    barWidth: '60%'
                },
                {
                    name: '二等奖',
                    type: 'bar',
                    stack: 'total',
                    data: secondPrizeData,
                    itemStyle: {
                        color: blueColors[1], // 中等蓝色
                        borderRadius: [0, 0, 0, 0]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        textBorderColor: 'rgba(0, 0, 0, 0.3)',
                        textBorderWidth: 1
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 8,
                            shadowColor: 'rgba(66, 165, 245, 0.4)',
                            opacity: 0.9
                        }
                    },
                    barWidth: '60%'
                },
                {
                    name: '三等奖',
                    type: 'bar',
                    stack: 'total',
                    data: thirdPrizeData,
                    itemStyle: {
                        color: blueColors[2], // 浅蓝色
                        borderRadius: [0, 0, 4, 4]
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function(params) {
                            return params.value > 0 ? params.value : '';
                        },
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        textBorderColor: 'rgba(0, 0, 0, 0.3)',
                        textBorderWidth: 1
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 8,
                            shadowColor: 'rgba(144, 202, 249, 0.4)',
                            opacity: 0.9
                        }
                    },
                    barWidth: '60%'
                }
            ]
        };
        
        innovationAwardsChart.setOption(innovationAwardsOption);
        console.log('创新技术奖项图表初始化成功（竖条形图，蓝色系）');
        
        window.addEventListener('resize', function() {
            innovationAwardsChart.resize();
        });
    }
} catch (error) {
    console.error('创新技术奖项图表初始化失败:', error);
}



// 详情页雷达图
// 初始化技术研发中心能力雷达图
try {
    var techCenterRadarDom = document.getElementById('techCenterRadarChart');
    if (techCenterRadarDom) {
        var techCenterRadarChart = echarts.init(techCenterRadarDom);
        
        // 技术研发中心四个核心能力得分（100分制）
        var techCenterData = {
            name: '技术研发中心',
            scores: [31.0, 100, 100, 100],  // 科技成果、科技质量、人才培养、创新能力
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var techCenterRadarOption = {
            // 添加网格配置，让图表更好地填充空间
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',  // 增大半径以占用更多空间
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = techCenterData.scores[index];
                    var label = techCenterData.labels[index];
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>';
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: techCenterData.scores,
                    name: techCenterData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'
                    },
                    lineStyle: {
                        color: '#2563eb',
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return techCenterData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        techCenterRadarChart.setOption(techCenterRadarOption);
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            techCenterRadarChart.resize();
        });
        
        // 初始调整大小
        setTimeout(function() {
            techCenterRadarChart.resize();
        }, 100);
    }
} catch (error) {
    console.error('技术研发中心能力雷达图初始化失败:', error);
}


// 修改后的信息工程院能力雷达图初始化
try {
    var informationRadarDom = document.getElementById('informationRadarChart');
    if (informationRadarDom) {
        // 使用与其他分院相同的延迟初始化模式
        var informationRadarChart = null;
        
        // 信息工程院四个核心能力得分（100分制）
        var informationData = {
            name: '信息工程院',
            scores: [14.1, 85, 88, 75],  // 科技成果、科技质量、人才培养、创新能力
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var informationRadarOption = {
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = informationData.scores[index];
                    var label = informationData.labels[index];
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>';
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: informationData.scores,
                    name: informationData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'
                    },
                    lineStyle: {
                        color: '#2563eb',
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return informationData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        // 初始化图表函数 - 与其他分院保持一致
        function initInformationRadarChart() {
            if (!informationRadarChart || informationRadarChart.isDisposed()) {
                informationRadarChart = echarts.init(informationRadarDom);
                informationRadarChart.setOption(informationRadarOption);
            }
        }
        
        // 重绘图表函数
        function resizeInformationRadarChart() {
            if (informationRadarChart && !informationRadarChart.isDisposed()) {
                // 检查容器是否可见
                var containerVisible = informationRadarDom.offsetWidth > 0 && informationRadarDom.offsetHeight > 0;
                var parentVisible = informationRadarDom.closest('.branch-detail')?.classList.contains('active');
                
                if (containerVisible && parentVisible) {
                    setTimeout(function() {
                        informationRadarChart.resize();
                        // 强制重绘
                        informationRadarChart.setOption(informationRadarOption, true);
                    }, 50);
                }
            }
        }
        
        // 使用ResizeObserver监听容器尺寸变化
        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function(entries) {
                for (let entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        // 容器变为可见时初始化或重绘图表
                        if (!informationRadarChart || informationRadarChart.isDisposed()) {
                            initInformationRadarChart();
                        }
                        setTimeout(resizeInformationRadarChart, 100);
                    }
                }
            });
            
            // 开始观察容器
            resizeObserver.observe(informationRadarDom);
        }
        
        // 监听页面切换事件
        document.addEventListener('DOMContentLoaded', function() {
            // 查找信息工程院的详情页容器
            var informationDetail = document.getElementById('information-detail');
            if (informationDetail) {
                // 监听class变化
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            var isVisible = informationDetail.classList.contains('active') && 
                                          !informationDetail.classList.contains('hidden');
                            if (isVisible) {
                                // 页面变为可见，延迟初始化图表
                                setTimeout(function() {
                                    initInformationRadarChart();
                                    resizeInformationRadarChart();
                                }, 200);
                            }
                        }
                    });
                });
                
                observer.observe(informationDetail, { attributes: true });
            }
            
            // 页面加载完成后尝试初始化一次
            setTimeout(initInformationRadarChart, 500);
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            resizeInformationRadarChart();
        });
        
        // 全局函数，供页面切换时调用
        window.showInformationDetailPage = function() {
            // 切换到信息工程院页面的逻辑
            var allDetails = document.querySelectorAll('.branch-detail');
            allDetails.forEach(function(detail) {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            });
            
            var informationDetail = document.getElementById('information-detail');
            if (informationDetail) {
                informationDetail.classList.remove('hidden');
                informationDetail.classList.add('active');
                
                // 延迟重绘图表
                setTimeout(function() {
                    initInformationRadarChart();
                    resizeInformationRadarChart();
                }, 250);
            }
        };
        
        // 检查并重新初始化图表的函数
        window.checkAndReinitInformationRadar = function() {
            if (informationRadarChart && !informationRadarChart.isDisposed()) {
                informationRadarChart.dispose();
            }
            initInformationRadarChart();
            return informationRadarChart;
        };
        
    } else {
        console.warn('未找到信息工程院雷达图容器元素，将在DOMContentLoaded后重试');
        // 延迟重试
        setTimeout(function() {
            if (!document.getElementById('informationRadarChart')) {
                console.error('信息工程院雷达图容器仍未找到');
            }
        }, 1000);
    }
} catch (error) {
    console.error('信息工程院能力雷达图初始化失败:', error);
    // 提供重试机制
    setTimeout(function() {
        try {
            var informationRadarDom = document.getElementById('informationRadarChart');
            if (informationRadarDom) {
                var informationRadarChart = echarts.init(informationRadarDom);
                informationRadarChart.setOption(informationRadarOption);
                setTimeout(function() {
                    informationRadarChart.resize();
                }, 100);
            }
        } catch (retryError) {
            console.error('重试初始化信息工程院雷达图失败:', retryError);
        }
    }, 500);
}

// 将信息工程院雷达图初始化添加到统一的图表初始化函数中
document.addEventListener('DOMContentLoaded', function() {
    if (typeof echarts !== 'undefined') {
        setTimeout(function() {
            try {
                if (document.getElementById('informationRadarChart')) {
                    var existingChart = echarts.getInstanceByDom(document.getElementById('informationRadarChart'));
                    if (!existingChart) {
                        informationRadarDom = document.getElementById('informationRadarChart');
                        if (informationRadarDom) {
                            var informationRadarChart = echarts.init(informationRadarDom);
                            informationRadarChart.setOption(informationRadarOption);
                        }
                    }
                }
            } catch (error) {
                console.error('信息工程院雷达图额外初始化失败:', error);
            }
        }, 1000);
    }
});

// 初始化调查监测院能力雷达图
try {
    var investigationRadarDom = document.getElementById('investigationRadarChart');
    if (investigationRadarDom) {
        // 延迟初始化，确保容器已正确显示
        var investigationRadarChart = null;
        
        // 调查监测院四个核心能力得分（100分制）
        var investigationData = {
            name: '调查监测院',
            scores: [13.1, 95, 60, 30],
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var investigationRadarOption = {
            // 添加网格配置，让图表更好地填充空间
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = investigationData.scores[index];
                    var label = investigationData.labels[index];
                    
                    var extraInfo = '';
                    if (label === '科技成果') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">项目数量多但科技成果相对较少</span>';
                    } else if (label === '科技质量') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">质量保障能力强，通过率高</span>';
                    } else if (label === '创新能力') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">创新平台和技术有待加强</span>';
                    }
                    
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>' + extraInfo;
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: investigationData.scores,
                    name: investigationData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'
                    },
                    lineStyle: {
                        color: '#2563eb',
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return investigationData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        // 初始化图表函数
        function initInvestigationRadarChart() {
            if (!investigationRadarChart || investigationRadarChart.isDisposed()) {
                investigationRadarChart = echarts.init(investigationRadarDom);
                investigationRadarChart.setOption(investigationRadarOption);
            }
        }
        
        // 重绘图表函数
        function resizeInvestigationRadarChart() {
            if (investigationRadarChart && !investigationRadarChart.isDisposed()) {
                // 检查容器是否可见
                var containerVisible = investigationRadarDom.offsetWidth > 0 && investigationRadarDom.offsetHeight > 0;
                var parentVisible = investigationRadarDom.closest('.branch-detail').classList.contains('active');
                
                if (containerVisible && parentVisible) {
                    setTimeout(function() {
                        investigationRadarChart.resize();
                        // 强制重绘
                        investigationRadarChart.setOption(investigationRadarOption, true);
                    }, 50);
                }
            }
        }
        
        // 使用ResizeObserver监听容器尺寸变化
        var resizeObserver = new ResizeObserver(function(entries) {
            for (let entry of entries) {
                if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                    // 容器变为可见时初始化或重绘图表
                    if (!investigationRadarChart || investigationRadarChart.isDisposed()) {
                        initInvestigationRadarChart();
                    }
                    setTimeout(resizeInvestigationRadarChart, 100);
                }
            }
        });
        
        // 开始观察容器
        resizeObserver.observe(investigationRadarDom);
        
        // 监听页面切换事件
        document.addEventListener('DOMContentLoaded', function() {
            // 查找调查监测院的详情页容器
            var investigationDetail = document.getElementById('investigation-detail');
            if (investigationDetail) {
                // 监听class变化
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            var isVisible = investigationDetail.classList.contains('active') && 
                                          !investigationDetail.classList.contains('hidden');
                            if (isVisible) {
                                // 页面变为可见，延迟初始化图表
                                setTimeout(function() {
                                    initInvestigationRadarChart();
                                    resizeInvestigationRadarChart();
                                }, 200);
                            }
                        }
                    });
                });
                
                observer.observe(investigationDetail, { attributes: true });
            }
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            resizeInvestigationRadarChart();
        });
        
        // 全局函数，供页面切换时调用
        window.showInvestigationDetailPage = function() {
            // 切换到调查监测院页面的逻辑
            var allDetails = document.querySelectorAll('.branch-detail');
            allDetails.forEach(function(detail) {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            });
            
            var investigationDetail = document.getElementById('investigation-detail');
            if (investigationDetail) {
                investigationDetail.classList.remove('hidden');
                investigationDetail.classList.add('active');
                
                // 延迟重绘图表
                setTimeout(function() {
                    initInvestigationRadarChart();
                    resizeInvestigationRadarChart();
                }, 250);
            }
        };
        
        // 检查并重新初始化图表的函数
        window.checkAndReinitInvestigationRadar = function() {
            if (investigationRadarChart && !investigationRadarChart.isDisposed()) {
                investigationRadarChart.dispose();
            }
            initInvestigationRadarChart();
            return investigationRadarChart;
        };
        
    } else {
        console.warn('未找到调查监测院雷达图容器元素，将在DOMContentLoaded后重试');
        // 延迟重试
        setTimeout(function() {
            if (!document.getElementById('investigationRadarChart')) {
                console.error('调查监测院雷达图容器仍未找到');
            }
        }, 1000);
    }
} catch (error) {
    console.error('调查监测院能力雷达图初始化失败:', error);
    // 提供重试机制
    setTimeout(function() {
        try {
            var investigationRadarDom = document.getElementById('investigationRadarChart');
            if (investigationRadarDom) {
                var investigationRadarChart = echarts.init(investigationRadarDom);
                investigationRadarChart.setOption(investigationRadarOption);
                setTimeout(function() {
                    investigationRadarChart.resize();
                }, 100);
            }
        } catch (retryError) {
            console.error('重试初始化调查监测院雷达图失败:', retryError);
        }
    }, 500);
}
    
// 初始化海洋院能力雷达图（第四个分院雷达图）
try {
    var marineRadarDom = document.getElementById('marineRadarChart');
    if (marineRadarDom) {
        // 延迟初始化，确保容器已正确显示
        var marineRadarChart = null;
        
        // 海洋院四个核心能力得分（100分制）- 基于实际数据估算
        var marineData = {
            name: '海洋院',
            scores: [9.9, 85, 15, 25], // 科技成果、科技质量、人才培养、创新能力
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var marineRadarOption = {
            // 添加网格配置，让图表更好地填充空间
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = marineData.scores[index];
                    var label = marineData.labels[index];
                    
                    var extraInfo = '';
                    if (label === '科技成果') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">项目较少但有高质量获奖成果</span>';
                    } else if (label === '科技质量') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">质量保障能力强，无质量事故</span>';
                    } else if (label === '人才培养') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">人才梯队建设相对薄弱</span>';
                    } else if (label === '创新能力') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">创新能力有待提升，缺乏专利</span>';
                    }
                    
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>' + extraInfo;
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: marineData.scores,
                    name: marineData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'  // 海洋蓝色
                    },
                    lineStyle: {
                        color: '#2563eb',  // 蓝色
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return marineData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        // 初始化图表函数
        function initMarineRadarChart() {
            if (!marineRadarChart || marineRadarChart.isDisposed()) {
                marineRadarChart = echarts.init(marineRadarDom);
                marineRadarChart.setOption(marineRadarOption);
            }
        }
        
        // 重绘图表函数
        function resizeMarineRadarChart() {
            if (marineRadarChart && !marineRadarChart.isDisposed()) {
                // 检查容器是否可见
                var containerVisible = marineRadarDom.offsetWidth > 0 && marineRadarDom.offsetHeight > 0;
                var parentVisible = marineRadarDom.closest('.branch-detail')?.classList.contains('active');
                
                if (containerVisible && parentVisible) {
                    setTimeout(function() {
                        marineRadarChart.resize();
                        // 强制重绘
                        marineRadarChart.setOption(marineRadarOption, true);
                    }, 50);
                }
            }
        }
        
        // 使用ResizeObserver监听容器尺寸变化
        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function(entries) {
                for (let entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        // 容器变为可见时初始化或重绘图表
                        if (!marineRadarChart || marineRadarChart.isDisposed()) {
                            initMarineRadarChart();
                        }
                        setTimeout(resizeMarineRadarChart, 100);
                    }
                }
            });
            
            // 开始观察容器
            resizeObserver.observe(marineRadarDom);
        }
        
        // 监听页面切换事件
        document.addEventListener('DOMContentLoaded', function() {
            // 查找海洋院的详情页容器
            var marineDetail = document.getElementById('marine-detail');
            if (marineDetail) {
                // 监听class变化
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            var isVisible = marineDetail.classList.contains('active') && 
                                          !marineDetail.classList.contains('hidden');
                            if (isVisible) {
                                // 页面变为可见，延迟初始化图表
                                setTimeout(function() {
                                    initMarineRadarChart();
                                    resizeMarineRadarChart();
                                }, 200);
                            }
                        }
                    });
                });
                
                observer.observe(marineDetail, { attributes: true });
            }
            
            // 页面加载完成后尝试初始化一次
            setTimeout(initMarineRadarChart, 500);
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            resizeMarineRadarChart();
        });
        
        // 全局函数，供页面切换时调用
        window.showMarineDetailPage = function() {
            // 切换到海洋院页面的逻辑
            var allDetails = document.querySelectorAll('.branch-detail');
            allDetails.forEach(function(detail) {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            });
            
            var marineDetail = document.getElementById('marine-detail');
            if (marineDetail) {
                marineDetail.classList.remove('hidden');
                marineDetail.classList.add('active');
                
                // 延迟重绘图表
                setTimeout(function() {
                    initMarineRadarChart();
                    resizeMarineRadarChart();
                }, 250);
            }
        };
        
        // 检查并重新初始化图表的函数
        window.checkAndReinitMarineRadar = function() {
            if (marineRadarChart && !marineRadarChart.isDisposed()) {
                marineRadarChart.dispose();
            }
            initMarineRadarChart();
            return marineRadarChart;
        };
        
    } else {
        console.warn('未找到海洋院雷达图容器元素，将在DOMContentLoaded后重试');
        // 延迟重试
        setTimeout(function() {
            if (!document.getElementById('marineRadarChart')) {
                console.error('海洋院雷达图容器仍未找到');
            }
        }, 1000);
    }
} catch (error) {
    console.error('海洋院能力雷达图初始化失败:', error);
    // 提供重试机制
    setTimeout(function() {
        try {
            var marineRadarDom = document.getElementById('marineRadarChart');
            if (marineRadarDom) {
                var marineRadarChart = echarts.init(marineRadarDom);
                marineRadarChart.setOption(marineRadarOption);
                setTimeout(function() {
                    marineRadarChart.resize();
                }, 100);
            }
        } catch (retryError) {
            console.error('重试初始化海洋院雷达图失败:', retryError);
        }
    }, 500);
}

// 将海洋院雷达图初始化添加到统一的图表初始化函数中
// 确保在所有图表初始化完成后也初始化海洋院雷达图
document.addEventListener('DOMContentLoaded', function() {
    // 如果echarts已加载，直接初始化
    if (typeof echarts !== 'undefined') {
        setTimeout(function() {
            try {
                if (document.getElementById('marineRadarChart')) {
                    var existingChart = echarts.getInstanceByDom(document.getElementById('marineRadarChart'));
                    if (!existingChart) {
                        // 调用初始化函数
                        marineRadarDom = document.getElementById('marineRadarChart');
                        if (marineRadarDom) {
                            var marineRadarChart = echarts.init(marineRadarDom);
                            marineRadarChart.setOption(marineRadarOption);
                        }
                    }
                }
            } catch (error) {
                console.error('海洋院雷达图额外初始化失败:', error);
            }
        }, 1000);
    }
});

// 初始化测绘八院能力雷达图（第五个分院雷达图）
try {
    var surveyEightRadarDom = document.getElementById('surveyEightRadarChart');
    if (surveyEightRadarDom) {
        // 延迟初始化，确保容器已正确显示
        var surveyEightRadarChart = null;
        
        // 测绘八院四个核心能力得分（100分制）- 基于实际数据估算
        var surveyEightData = {
            name: '测绘八院',
            scores: [5.5, 60, 65, 30], // 科技成果、科技质量、人才培养、创新能力
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var surveyEightRadarOption = {
            // 添加网格配置，让图表更好地填充空间
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = surveyEightData.scores[index];
                    var label = surveyEightData.labels[index];
                    
                    var extraInfo = '';
                    if (label === '科技成果') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">论文发表能力强（3篇），但无获奖和专利</span>';
                    } else if (label === '科技质量') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">质量保障有待加强（2次质量事故）</span>';
                    } else if (label === '人才培养') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">团队年轻化（平均32岁），硕士比例高</span>';
                    } else if (label === '创新能力') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">创新能力薄弱，缺乏平台和专利</span>';
                    }
                    
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>' + extraInfo;
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: surveyEightData.scores,
                    name: surveyEightData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'  // 紫色
                    },
                    lineStyle: {
                        color: '#2563eb',  // 紫色
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return surveyEightData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        // 初始化图表函数
        function initSurveyEightRadarChart() {
            if (!surveyEightRadarChart || surveyEightRadarChart.isDisposed()) {
                surveyEightRadarChart = echarts.init(surveyEightRadarDom);
                surveyEightRadarChart.setOption(surveyEightRadarOption);
            }
        }
        
        // 重绘图表函数
        function resizeSurveyEightRadarChart() {
            if (surveyEightRadarChart && !surveyEightRadarChart.isDisposed()) {
                // 检查容器是否可见
                var containerVisible = surveyEightRadarDom.offsetWidth > 0 && surveyEightRadarDom.offsetHeight > 0;
                var parentVisible = surveyEightRadarDom.closest('.branch-detail')?.classList.contains('active');
                
                if (containerVisible && parentVisible) {
                    setTimeout(function() {
                        surveyEightRadarChart.resize();
                        // 强制重绘
                        surveyEightRadarChart.setOption(surveyEightRadarOption, true);
                    }, 50);
                }
            }
        }
        
        // 使用ResizeObserver监听容器尺寸变化
        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function(entries) {
                for (let entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        // 容器变为可见时初始化或重绘图表
                        if (!surveyEightRadarChart || surveyEightRadarChart.isDisposed()) {
                            initSurveyEightRadarChart();
                        }
                        setTimeout(resizeSurveyEightRadarChart, 100);
                    }
                }
            });
            
            // 开始观察容器
            resizeObserver.observe(surveyEightRadarDom);
        }
        
        // 监听页面切换事件
        document.addEventListener('DOMContentLoaded', function() {
            // 查找测绘八院的详情页容器
            var surveyEightDetail = document.getElementById('survey-eight-detail');
            if (surveyEightDetail) {
                // 监听class变化
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            var isVisible = surveyEightDetail.classList.contains('active') && 
                                          !surveyEightDetail.classList.contains('hidden');
                            if (isVisible) {
                                // 页面变为可见，延迟初始化图表
                                setTimeout(function() {
                                    initSurveyEightRadarChart();
                                    resizeSurveyEightRadarChart();
                                }, 200);
                            }
                        }
                    });
                });
                
                observer.observe(surveyEightDetail, { attributes: true });
            }
            
            // 页面加载完成后尝试初始化一次
            setTimeout(initSurveyEightRadarChart, 500);
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            resizeSurveyEightRadarChart();
        });
        
        // 全局函数，供页面切换时调用
        window.showSurveyEightDetailPage = function() {
            // 切换到测绘八院页面的逻辑
            var allDetails = document.querySelectorAll('.branch-detail');
            allDetails.forEach(function(detail) {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            });
            
            var surveyEightDetail = document.getElementById('survey-eight-detail');
            if (surveyEightDetail) {
                surveyEightDetail.classList.remove('hidden');
                surveyEightDetail.classList.add('active');
                
                // 延迟重绘图表
                setTimeout(function() {
                    initSurveyEightRadarChart();
                    resizeSurveyEightRadarChart();
                }, 250);
            }
        };
        
        // 检查并重新初始化图表的函数
        window.checkAndReinitSurveyEightRadar = function() {
            if (surveyEightRadarChart && !surveyEightRadarChart.isDisposed()) {
                surveyEightRadarChart.dispose();
            }
            initSurveyEightRadarChart();
            return surveyEightRadarChart;
        };
        
    } else {
        console.warn('未找到测绘八院雷达图容器元素，将在DOMContentLoaded后重试');
        // 延迟重试
        setTimeout(function() {
            if (!document.getElementById('surveyEightRadarChart')) {
                console.error('测绘八院雷达图容器仍未找到');
            }
        }, 1000);
    }
} catch (error) {
    console.error('测绘八院能力雷达图初始化失败:', error);
    // 提供重试机制
    setTimeout(function() {
        try {
            var surveyEightRadarDom = document.getElementById('surveyEightRadarChart');
            if (surveyEightRadarDom) {
                var surveyEightRadarChart = echarts.init(surveyEightRadarDom);
                surveyEightRadarChart.setOption(surveyEightRadarOption);
                setTimeout(function() {
                    surveyEightRadarChart.resize();
                }, 100);
            }
        } catch (retryError) {
            console.error('重试初始化测绘八院雷达图失败:', retryError);
        }
    }, 500);
}

// 将测绘八院雷达图初始化添加到统一的图表初始化函数中
document.addEventListener('DOMContentLoaded', function() {
    // 如果echarts已加载，直接初始化
    if (typeof echarts !== 'undefined') {
        setTimeout(function() {
            try {
                if (document.getElementById('surveyEightRadarChart')) {
                    var existingChart = echarts.getInstanceByDom(document.getElementById('surveyEightRadarChart'));
                    if (!existingChart) {
                        // 调用初始化函数
                        surveyEightRadarDom = document.getElementById('surveyEightRadarChart');
                        if (surveyEightRadarDom) {
                            var surveyEightRadarChart = echarts.init(surveyEightRadarDom);
                            surveyEightRadarChart.setOption(surveyEightRadarOption);
                        }
                    }
                }
            } catch (error) {
                console.error('测绘八院雷达图额外初始化失败:', error);
            }
        }, 1000);
    }
});

// 测绘七院能力雷达图初始化（第六个分院雷达图）
try {
    var surveySevenRadarDom = document.getElementById('surveySevenRadarChart');
    if (surveySevenRadarDom) {
        // 延迟初始化，确保容器已正确显示
        var surveySevenRadarChart = null;
        
        // 测绘七院四个核心能力得分（100分制）- 基于实际数据估算
        var surveySevenData = {
            name: '测绘七院',
            scores: [6.7, 85, 65, 35], // 科技成果、科技质量、人才培养、创新能力
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var surveySevenRadarOption = {
            // 添加网格配置，让图表更好地填充空间
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = surveySevenData.scores[index];
                    var label = surveySevenData.labels[index];
                    
                    var extraInfo = '';
                    if (label === '科技成果') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">软著突出（16项），标准制定能力强（4项）</span>';
                    } else if (label === '科技质量') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">质量保障良好，符合率全院第二（96%）</span>';
                    } else if (label === '人才培养') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">团队年轻化（平均32岁），硕士比例高（83%）</span>';
                    } else if (label === '创新能力') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">创新能力一般，软著较多但无专利和平台</span>';
                    }
                    
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>' + extraInfo;
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: surveySevenData.scores,
                    name: surveySevenData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'  // 绿色
                    },
                    lineStyle: {
                        color: '#2563eb',  // 绿色
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return surveySevenData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        // 初始化图表函数
        function initSurveySevenRadarChart() {
            if (!surveySevenRadarChart || surveySevenRadarChart.isDisposed()) {
                surveySevenRadarChart = echarts.init(surveySevenRadarDom);
                surveySevenRadarChart.setOption(surveySevenRadarOption);
            }
        }
        
        // 重绘图表函数
        function resizeSurveySevenRadarChart() {
            if (surveySevenRadarChart && !surveySevenRadarChart.isDisposed()) {
                // 检查容器是否可见
                var containerVisible = surveySevenRadarDom.offsetWidth > 0 && surveySevenRadarDom.offsetHeight > 0;
                var parentVisible = surveySevenRadarDom.closest('.branch-detail')?.classList.contains('active');
                
                if (containerVisible && parentVisible) {
                    setTimeout(function() {
                        surveySevenRadarChart.resize();
                        // 强制重绘
                        surveySevenRadarChart.setOption(surveySevenRadarOption, true);
                    }, 50);
                }
            }
        }
        
        // 使用ResizeObserver监听容器尺寸变化
        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function(entries) {
                for (let entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        // 容器变为可见时初始化或重绘图表
                        if (!surveySevenRadarChart || surveySevenRadarChart.isDisposed()) {
                            initSurveySevenRadarChart();
                        }
                        setTimeout(resizeSurveySevenRadarChart, 100);
                    }
                }
            });
            
            // 开始观察容器
            resizeObserver.observe(surveySevenRadarDom);
        }
        
        // 监听页面切换事件
        document.addEventListener('DOMContentLoaded', function() {
            // 查找测绘七院的详情页容器
            var surveySevenDetail = document.getElementById('survey-seven-detail');
            if (surveySevenDetail) {
                // 监听class变化
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            var isVisible = surveySevenDetail.classList.contains('active') && 
                                          !surveySevenDetail.classList.contains('hidden');
                            if (isVisible) {
                                // 页面变为可见，延迟初始化图表
                                setTimeout(function() {
                                    initSurveySevenRadarChart();
                                    resizeSurveySevenRadarChart();
                                }, 200);
                            }
                        }
                    });
                });
                
                observer.observe(surveySevenDetail, { attributes: true });
            }
            
            // 页面加载完成后尝试初始化一次
            setTimeout(initSurveySevenRadarChart, 500);
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            resizeSurveySevenRadarChart();
        });
        
        // 全局函数，供页面切换时调用
        window.showSurveySevenDetailPage = function() {
            // 切换到测绘七院页面的逻辑
            var allDetails = document.querySelectorAll('.branch-detail');
            allDetails.forEach(function(detail) {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            });
            
            var surveySevenDetail = document.getElementById('survey-seven-detail');
            if (surveySevenDetail) {
                surveySevenDetail.classList.remove('hidden');
                surveySevenDetail.classList.add('active');
                
                // 延迟重绘图表
                setTimeout(function() {
                    initSurveySevenRadarChart();
                    resizeSurveySevenRadarChart();
                }, 250);
            }
        };
        
        // 检查并重新初始化图表的函数
        window.checkAndReinitSurveySevenRadar = function() {
            if (surveySevenRadarChart && !surveySevenRadarChart.isDisposed()) {
                surveySevenRadarChart.dispose();
            }
            initSurveySevenRadarChart();
            return surveySevenRadarChart;
        };
        
    } else {
        console.warn('未找到测绘七院雷达图容器元素，将在DOMContentLoaded后重试');
        // 延迟重试
        setTimeout(function() {
            if (!document.getElementById('surveySevenRadarChart')) {
                console.error('测绘七院雷达图容器仍未找到');
            }
        }, 1000);
    }
} catch (error) {
    console.error('测绘七院能力雷达图初始化失败:', error);
    // 提供重试机制
    setTimeout(function() {
        try {
            var surveySevenRadarDom = document.getElementById('surveySevenRadarChart');
            if (surveySevenRadarDom) {
                var surveySevenRadarChart = echarts.init(surveySevenRadarDom);
                surveySevenRadarChart.setOption(surveySevenRadarOption);
                setTimeout(function() {
                    surveySevenRadarChart.resize();
                }, 100);
            }
        } catch (retryError) {
            console.error('重试初始化测绘七院雷达图失败:', retryError);
        }
    }, 500);
}

// 将测绘七院雷达图初始化添加到统一的图表初始化函数中
document.addEventListener('DOMContentLoaded', function() {
    if (typeof echarts !== 'undefined') {
        setTimeout(function() {
            try {
                if (document.getElementById('surveySevenRadarChart')) {
                    var existingChart = echarts.getInstanceByDom(document.getElementById('surveySevenRadarChart'));
                    if (!existingChart) {
                        surveySevenRadarDom = document.getElementById('surveySevenRadarChart');
                        if (surveySevenRadarDom) {
                            var surveySevenRadarChart = echarts.init(surveySevenRadarDom);
                            surveySevenRadarChart.setOption(surveySevenRadarOption);
                        }
                    }
                }
            } catch (error) {
                console.error('测绘七院雷达图额外初始化失败:', error);
            }
        }, 1000);
    }
});

// 测绘四院能力雷达图初始化（第七个分院雷达图）
try {
    var surveyFourRadarDom = document.getElementById('surveyFourRadarChart');
    if (surveyFourRadarDom) {
        // 延迟初始化，确保容器已正确显示
        var surveyFourRadarChart = null;
        
        // 测绘四院四个核心能力得分（100分制）- 基于实际数据估算
        var surveyFourData = {
            name: '测绘四院',
            scores: [6.6, 85, 70, 40], // 科技成果、科技质量、人才培养、创新能力
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var surveyFourRadarOption = {
            // 添加网格配置，让图表更好地填充空间
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = surveyFourData.scores[index];
                    var label = surveyFourData.labels[index];
                    
                    var extraInfo = '';
                    if (label === '科技成果') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">科研项目数量多（2项，45万），标准制定能力强</span>';
                    } else if (label === '科技质量') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">质量保障优秀，无事故，通过率全院第三（92%）</span>';
                    } else if (label === '人才培养') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">专家梯队合理（6人），硕士比例高（86%）</span>';
                    } else if (label === '创新能力') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">有一定创新基础（1项实用新型专利）</span>';
                    }
                    
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>' + extraInfo;
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: surveyFourData.scores,
                    name: surveyFourData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'  // 橙色
                    },
                    lineStyle: {
                        color: '#2563eb',  // 橙色
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return surveyFourData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        // 初始化图表函数
        function initSurveyFourRadarChart() {
            if (!surveyFourRadarChart || surveyFourRadarChart.isDisposed()) {
                surveyFourRadarChart = echarts.init(surveyFourRadarDom);
                surveyFourRadarChart.setOption(surveyFourRadarOption);
            }
        }
        
        // 重绘图表函数
        function resizeSurveyFourRadarChart() {
            if (surveyFourRadarChart && !surveyFourRadarChart.isDisposed()) {
                // 检查容器是否可见
                var containerVisible = surveyFourRadarDom.offsetWidth > 0 && surveyFourRadarDom.offsetHeight > 0;
                var parentVisible = surveyFourRadarDom.closest('.branch-detail')?.classList.contains('active');
                
                if (containerVisible && parentVisible) {
                    setTimeout(function() {
                        surveyFourRadarChart.resize();
                        // 强制重绘
                        surveyFourRadarChart.setOption(surveyFourRadarOption, true);
                    }, 50);
                }
            }
        }
        
        // 使用ResizeObserver监听容器尺寸变化
        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function(entries) {
                for (let entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        // 容器变为可见时初始化或重绘图表
                        if (!surveyFourRadarChart || surveyFourRadarChart.isDisposed()) {
                            initSurveyFourRadarChart();
                        }
                        setTimeout(resizeSurveyFourRadarChart, 100);
                    }
                }
            });
            
            // 开始观察容器
            resizeObserver.observe(surveyFourRadarDom);
        }
        
        // 监听页面切换事件
        document.addEventListener('DOMContentLoaded', function() {
            // 查找测绘四院的详情页容器
            var surveyFourDetail = document.getElementById('survey-four-detail');
            if (surveyFourDetail) {
                // 监听class变化
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            var isVisible = surveyFourDetail.classList.contains('active') && 
                                          !surveyFourDetail.classList.contains('hidden');
                            if (isVisible) {
                                // 页面变为可见，延迟初始化图表
                                setTimeout(function() {
                                    initSurveyFourRadarChart();
                                    resizeSurveyFourRadarChart();
                                }, 200);
                            }
                        }
                    });
                });
                
                observer.observe(surveyFourDetail, { attributes: true });
            }
            
            // 页面加载完成后尝试初始化一次
            setTimeout(initSurveyFourRadarChart, 500);
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            resizeSurveyFourRadarChart();
        });
        
        // 全局函数，供页面切换时调用
        window.showSurveyFourDetailPage = function() {
            // 切换到测绘四院页面的逻辑
            var allDetails = document.querySelectorAll('.branch-detail');
            allDetails.forEach(function(detail) {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            });
            
            var surveyFourDetail = document.getElementById('survey-four-detail');
            if (surveyFourDetail) {
                surveyFourDetail.classList.remove('hidden');
                surveyFourDetail.classList.add('active');
                
                // 延迟重绘图表
                setTimeout(function() {
                    initSurveyFourRadarChart();
                    resizeSurveyFourRadarChart();
                }, 250);
            }
        };
        
        // 检查并重新初始化图表的函数
        window.checkAndReinitSurveyFourRadar = function() {
            if (surveyFourRadarChart && !surveyFourRadarChart.isDisposed()) {
                surveyFourRadarChart.dispose();
            }
            initSurveyFourRadarChart();
            return surveyFourRadarChart;
        };
        
    } else {
        console.warn('未找到测绘四院雷达图容器元素，将在DOMContentLoaded后重试');
        // 延迟重试
        setTimeout(function() {
            if (!document.getElementById('surveyFourRadarChart')) {
                console.error('测绘四院雷达图容器仍未找到');
            }
        }, 1000);
    }
} catch (error) {
    console.error('测绘四院能力雷达图初始化失败:', error);
    // 提供重试机制
    setTimeout(function() {
        try {
            var surveyFourRadarDom = document.getElementById('surveyFourRadarChart');
            if (surveyFourRadarDom) {
                var surveyFourRadarChart = echarts.init(surveyFourRadarDom);
                surveyFourRadarChart.setOption(surveyFourRadarOption);
                setTimeout(function() {
                    surveyFourRadarChart.resize();
                }, 100);
            }
        } catch (retryError) {
            console.error('重试初始化测绘四院雷达图失败:', retryError);
        }
    }, 500);
}

// 将测绘四院雷达图初始化添加到统一的图表初始化函数中
document.addEventListener('DOMContentLoaded', function() {
    if (typeof echarts !== 'undefined') {
        setTimeout(function() {
            try {
                if (document.getElementById('surveyFourRadarChart')) {
                    var existingChart = echarts.getInstanceByDom(document.getElementById('surveyFourRadarChart'));
                    if (!existingChart) {
                        surveyFourRadarDom = document.getElementById('surveyFourRadarChart');
                        if (surveyFourRadarDom) {
                            var surveyFourRadarChart = echarts.init(surveyFourRadarDom);
                            surveyFourRadarChart.setOption(surveyFourRadarOption);
                        }
                    }
                }
            } catch (error) {
                console.error('测绘四院雷达图额外初始化失败:', error);
            }
        }, 1000);
    }
});

// 测绘三院能力雷达图初始化（第八个分院雷达图）
try {
    var surveyThreeRadarDom = document.getElementById('surveyThreeRadarChart');
    if (surveyThreeRadarDom) {
        // 延迟初始化，确保容器已正确显示
        var surveyThreeRadarChart = null;
        
        // 测绘三院四个核心能力得分（100分制）- 基于实际数据估算
        var surveyThreeData = {
            name: '测绘三院',
            scores: [19.7, 70, 85, 55], // 科技成果、科技质量、人才培养、创新能力
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var surveyThreeRadarOption = {
            // 添加网格配置，让图表更好地填充空间
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = surveyThreeData.scores[index];
                    var label = surveyThreeData.labels[index];
                    
                    var extraInfo = '';
                    if (label === '科技成果') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">科研项目全院最多（7项），获奖成果突出（2项部级奖）</span>';
                    } else if (label === '科技质量') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">质量保障中等，无事故但通过率有待提升（76%）</span>';
                    } else if (label === '人才培养') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">人才梯队强大（9人），硕博比例100%，团队规模全院第二</span>';
                    } else if (label === '创新能力') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">有一定创新基础（1项发明专利），但平台建设不足</span>';
                    }
                    
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>' + extraInfo;
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: surveyThreeData.scores,
                    name: surveyThreeData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'  // 深紫色
                    },
                    lineStyle: {
                        color: '#2563eb',  // 深紫色
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return surveyThreeData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        // 初始化图表函数
        function initSurveyThreeRadarChart() {
            if (!surveyThreeRadarChart || surveyThreeRadarChart.isDisposed()) {
                surveyThreeRadarChart = echarts.init(surveyThreeRadarDom);
                surveyThreeRadarChart.setOption(surveyThreeRadarOption);
            }
        }
        
        // 重绘图表函数
        function resizeSurveyThreeRadarChart() {
            if (surveyThreeRadarChart && !surveyThreeRadarChart.isDisposed()) {
                // 检查容器是否可见
                var containerVisible = surveyThreeRadarDom.offsetWidth > 0 && surveyThreeRadarDom.offsetHeight > 0;
                var parentVisible = surveyThreeRadarDom.closest('.branch-detail')?.classList.contains('active');
                
                if (containerVisible && parentVisible) {
                    setTimeout(function() {
                        surveyThreeRadarChart.resize();
                        // 强制重绘
                        surveyThreeRadarChart.setOption(surveyThreeRadarOption, true);
                    }, 50);
                }
            }
        }
        
        // 使用ResizeObserver监听容器尺寸变化
        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function(entries) {
                for (let entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        // 容器变为可见时初始化或重绘图表
                        if (!surveyThreeRadarChart || surveyThreeRadarChart.isDisposed()) {
                            initSurveyThreeRadarChart();
                        }
                        setTimeout(resizeSurveyThreeRadarChart, 100);
                    }
                }
            });
            
            // 开始观察容器
            resizeObserver.observe(surveyThreeRadarDom);
        }
        
        // 监听页面切换事件
        document.addEventListener('DOMContentLoaded', function() {
            // 查找测绘三院的详情页容器
            var surveyThreeDetail = document.getElementById('survey-three-detail');
            if (surveyThreeDetail) {
                // 监听class变化
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            var isVisible = surveyThreeDetail.classList.contains('active') && 
                                          !surveyThreeDetail.classList.contains('hidden');
                            if (isVisible) {
                                // 页面变为可见，延迟初始化图表
                                setTimeout(function() {
                                    initSurveyThreeRadarChart();
                                    resizeSurveyThreeRadarChart();
                                }, 200);
                            }
                        }
                    });
                });
                
                observer.observe(surveyThreeDetail, { attributes: true });
            }
            
            // 页面加载完成后尝试初始化一次
            setTimeout(initSurveyThreeRadarChart, 500);
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            resizeSurveyThreeRadarChart();
        });
        
        // 全局函数，供页面切换时调用
        window.showSurveyThreeDetailPage = function() {
            // 切换到测绘三院页面的逻辑
            var allDetails = document.querySelectorAll('.branch-detail');
            allDetails.forEach(function(detail) {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            });
            
            var surveyThreeDetail = document.getElementById('survey-three-detail');
            if (surveyThreeDetail) {
                surveyThreeDetail.classList.remove('hidden');
                surveyThreeDetail.classList.add('active');
                
                // 延迟重绘图表
                setTimeout(function() {
                    initSurveyThreeRadarChart();
                    resizeSurveyThreeRadarChart();
                }, 250);
            }
        };
        
        // 检查并重新初始化图表的函数
        window.checkAndReinitSurveyThreeRadar = function() {
            if (surveyThreeRadarChart && !surveyThreeRadarChart.isDisposed()) {
                surveyThreeRadarChart.dispose();
            }
            initSurveyThreeRadarChart();
            return surveyThreeRadarChart;
        };
        
    } else {
        console.warn('未找到测绘三院雷达图容器元素，将在DOMContentLoaded后重试');
        // 延迟重试
        setTimeout(function() {
            if (!document.getElementById('surveyThreeRadarChart')) {
                console.error('测绘三院雷达图容器仍未找到');
            }
        }, 1000);
    }
} catch (error) {
    console.error('测绘三院能力雷达图初始化失败:', error);
    // 提供重试机制
    setTimeout(function() {
        try {
            var surveyThreeRadarDom = document.getElementById('surveyThreeRadarChart');
            if (surveyThreeRadarDom) {
                var surveyThreeRadarChart = echarts.init(surveyThreeRadarDom);
                surveyThreeRadarChart.setOption(surveyThreeRadarOption);
                setTimeout(function() {
                    surveyThreeRadarChart.resize();
                }, 100);
            }
        } catch (retryError) {
            console.error('重试初始化测绘三院雷达图失败:', retryError);
        }
    }, 500);
}

// 将测绘三院雷达图初始化添加到统一的图表初始化函数中
document.addEventListener('DOMContentLoaded', function() {
    if (typeof echarts !== 'undefined') {
        setTimeout(function() {
            try {
                if (document.getElementById('surveyThreeRadarChart')) {
                    var existingChart = echarts.getInstanceByDom(document.getElementById('surveyThreeRadarChart'));
                    if (!existingChart) {
                        surveyThreeRadarDom = document.getElementById('surveyThreeRadarChart');
                        if (surveyThreeRadarDom) {
                            var surveyThreeRadarChart = echarts.init(surveyThreeRadarDom);
                            surveyThreeRadarChart.setOption(surveyThreeRadarOption);
                        }
                    }
                }
            } catch (error) {
                console.error('测绘三院雷达图额外初始化失败:', error);
            }
        }, 1000);
    }
});

// 滨海院能力雷达图初始化（第九个分院雷达图）
try {
    var coastalRadarDom = document.getElementById('coastalRadarChart');
    if (coastalRadarDom) {
        // 延迟初始化，确保容器已正确显示
        var coastalRadarChart = null;
        
        // 滨海院四个核心能力得分（100分制）- 基于实际数据估算
        var coastalData = {
            name: '滨海院',
            scores: [3.3, 95, 40, 35], // 科技成果、科技质量、人才培养、创新能力
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var coastalRadarOption = {
            // 添加网格配置，让图表更好地填充空间
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = coastalData.scores[index];
                    var label = coastalData.labels[index];
                    
                    var extraInfo = '';
                    if (label === '科技成果') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">科技成果产出薄弱（无科研项目、无专利），但有核心期刊论文和标准制定</span>';
                    } else if (label === '科技质量') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">质量保障能力全院顶尖（通过率98%，符合率98%，无事故）</span>';
                    } else if (label === '人才培养') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">人才梯队薄弱（有专家降级情况），技术团队建设不足</span>';
                    } else if (label === '创新能力') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">创新能力不足，但有2项创新技术三等奖</span>';
                    }
                    
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>' + extraInfo;
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: coastalData.scores,
                    name: coastalData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'  // 绿色
                    },
                    lineStyle: {
                        color: '#2563eb',  // 绿色
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return coastalData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        // 初始化图表函数
        function initCoastalRadarChart() {
            if (!coastalRadarChart || coastalRadarChart.isDisposed()) {
                coastalRadarChart = echarts.init(coastalRadarDom);
                coastalRadarChart.setOption(coastalRadarOption);
            }
        }
        
        // 重绘图表函数
        function resizeCoastalRadarChart() {
            if (coastalRadarChart && !coastalRadarChart.isDisposed()) {
                // 检查容器是否可见
                var containerVisible = coastalRadarDom.offsetWidth > 0 && coastalRadarDom.offsetHeight > 0;
                var parentVisible = coastalRadarDom.closest('.branch-detail')?.classList.contains('active');
                
                if (containerVisible && parentVisible) {
                    setTimeout(function() {
                        coastalRadarChart.resize();
                        // 强制重绘
                        coastalRadarChart.setOption(coastalRadarOption, true);
                    }, 50);
                }
            }
        }
        
        // 使用ResizeObserver监听容器尺寸变化
        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function(entries) {
                for (let entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        // 容器变为可见时初始化或重绘图表
                        if (!coastalRadarChart || coastalRadarChart.isDisposed()) {
                            initCoastalRadarChart();
                        }
                        setTimeout(resizeCoastalRadarChart, 100);
                    }
                }
            });
            
            // 开始观察容器
            resizeObserver.observe(coastalRadarDom);
        }
        
        // 监听页面切换事件
        document.addEventListener('DOMContentLoaded', function() {
            // 查找滨海院的详情页容器
            var coastalDetail = document.getElementById('coastal-detail');
            if (coastalDetail) {
                // 监听class变化
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            var isVisible = coastalDetail.classList.contains('active') && 
                                          !coastalDetail.classList.contains('hidden');
                            if (isVisible) {
                                // 页面变为可见，延迟初始化图表
                                setTimeout(function() {
                                    initCoastalRadarChart();
                                    resizeCoastalRadarChart();
                                }, 200);
                            }
                        }
                    });
                });
                
                observer.observe(coastalDetail, { attributes: true });
            }
            
            // 页面加载完成后尝试初始化一次
            setTimeout(initCoastalRadarChart, 500);
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            resizeCoastalRadarChart();
        });
        
        // 全局函数，供页面切换时调用
        window.showCoastalDetailPage = function() {
            // 切换到滨海院页面的逻辑
            var allDetails = document.querySelectorAll('.branch-detail');
            allDetails.forEach(function(detail) {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            });
            
            var coastalDetail = document.getElementById('coastal-detail');
            if (coastalDetail) {
                coastalDetail.classList.remove('hidden');
                coastalDetail.classList.add('active');
                
                // 延迟重绘图表
                setTimeout(function() {
                    initCoastalRadarChart();
                    resizeCoastalRadarChart();
                }, 250);
            }
        };
        
        // 检查并重新初始化图表的函数
        window.checkAndReinitCoastalRadar = function() {
            if (coastalRadarChart && !coastalRadarChart.isDisposed()) {
                coastalRadarChart.dispose();
            }
            initCoastalRadarChart();
            return coastalRadarChart;
        };
        
    } else {
        console.warn('未找到滨海院雷达图容器元素，将在DOMContentLoaded后重试');
        // 延迟重试
        setTimeout(function() {
            if (!document.getElementById('coastalRadarChart')) {
                console.error('滨海院雷达图容器仍未找到');
            }
        }, 1000);
    }
} catch (error) {
    console.error('滨海院能力雷达图初始化失败:', error);
    // 提供重试机制
    setTimeout(function() {
        try {
            var coastalRadarDom = document.getElementById('coastalRadarChart');
            if (coastalRadarDom) {
                var coastalRadarChart = echarts.init(coastalRadarDom);
                coastalRadarChart.setOption(coastalRadarOption);
                setTimeout(function() {
                    coastalRadarChart.resize();
                }, 100);
            }
        } catch (retryError) {
            console.error('重试初始化滨海院雷达图失败:', retryError);
        }
    }, 500);
}

// 将滨海院雷达图初始化添加到统一的图表初始化函数中
document.addEventListener('DOMContentLoaded', function() {
    if (typeof echarts !== 'undefined') {
        setTimeout(function() {
            try {
                if (document.getElementById('coastalRadarChart')) {
                    var existingChart = echarts.getInstanceByDom(document.getElementById('coastalRadarChart'));
                    if (!existingChart) {
                        coastalRadarDom = document.getElementById('coastalRadarChart');
                        if (coastalRadarDom) {
                            var coastalRadarChart = echarts.init(coastalRadarDom);
                            coastalRadarChart.setOption(coastalRadarOption);
                        }
                    }
                }
            } catch (error) {
                console.error('滨海院雷达图额外初始化失败:', error);
            }
        }, 1000);
    }
});

// 基础测绘院能力雷达图初始化（第十个分院雷达图）
try {
    var basicSurveyRadarDom = document.getElementById('basicSurveyRadarChart');
    if (basicSurveyRadarDom) {
        // 延迟初始化，确保容器已正确显示
        var basicSurveyRadarChart = null;
        
        // 基础测绘院四个核心能力得分（100分制）- 基于实际数据估算
        var basicSurveyData = {
            name: '基础测绘院',
            scores: [4.6, 60, 75, 50], // 科技成果、科技质量、人才培养、创新能力
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var basicSurveyRadarOption = {
            // 添加网格配置，让图表更好地填充空间
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = basicSurveyData.scores[index];
                    var label = basicSurveyData.labels[index];
                    
                    var extraInfo = '';
                    if (label === '科技成果') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">科研项目较少（1项），但有核心期刊论文和标准制定能力</span>';
                    } else if (label === '科技质量') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">质量保障存在较大问题（2次质量事故），需重点加强</span>';
                    } else if (label === '人才培养') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">专家梯队结构良好（4人），硕博比例100%，团队稳定</span>';
                    } else if (label === '创新能力') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">创新项目多（91项），但缺乏平台和专利支撑</span>';
                    }
                    
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>' + extraInfo;
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: basicSurveyData.scores,
                    name: basicSurveyData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'  // 红色
                    },
                    lineStyle: {
                        color: '#2563eb',  // 红色
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return basicSurveyData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        // 初始化图表函数
        function initBasicSurveyRadarChart() {
            if (!basicSurveyRadarChart || basicSurveyRadarChart.isDisposed()) {
                basicSurveyRadarChart = echarts.init(basicSurveyRadarDom);
                basicSurveyRadarChart.setOption(basicSurveyRadarOption);
            }
        }
        
        // 重绘图表函数
        function resizeBasicSurveyRadarChart() {
            if (basicSurveyRadarChart && !basicSurveyRadarChart.isDisposed()) {
                // 检查容器是否可见
                var containerVisible = basicSurveyRadarDom.offsetWidth > 0 && basicSurveyRadarDom.offsetHeight > 0;
                var parentVisible = basicSurveyRadarDom.closest('.branch-detail')?.classList.contains('active');
                
                if (containerVisible && parentVisible) {
                    setTimeout(function() {
                        basicSurveyRadarChart.resize();
                        // 强制重绘
                        basicSurveyRadarChart.setOption(basicSurveyRadarOption, true);
                    }, 50);
                }
            }
        }
        
        // 使用ResizeObserver监听容器尺寸变化
        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function(entries) {
                for (let entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        // 容器变为可见时初始化或重绘图表
                        if (!basicSurveyRadarChart || basicSurveyRadarChart.isDisposed()) {
                            initBasicSurveyRadarChart();
                        }
                        setTimeout(resizeBasicSurveyRadarChart, 100);
                    }
                }
            });
            
            // 开始观察容器
            resizeObserver.observe(basicSurveyRadarDom);
        }
        
        // 监听页面切换事件
        document.addEventListener('DOMContentLoaded', function() {
            // 查找基础测绘院的详情页容器
            var basicSurveyDetail = document.getElementById('basic-survey-detail');
            if (basicSurveyDetail) {
                // 监听class变化
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            var isVisible = basicSurveyDetail.classList.contains('active') && 
                                          !basicSurveyDetail.classList.contains('hidden');
                            if (isVisible) {
                                // 页面变为可见，延迟初始化图表
                                setTimeout(function() {
                                    initBasicSurveyRadarChart();
                                    resizeBasicSurveyRadarChart();
                                }, 200);
                            }
                        }
                    });
                });
                
                observer.observe(basicSurveyDetail, { attributes: true });
            }
            
            // 页面加载完成后尝试初始化一次
            setTimeout(initBasicSurveyRadarChart, 500);
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            resizeBasicSurveyRadarChart();
        });
        
        // 全局函数，供页面切换时调用
        window.showBasicSurveyDetailPage = function() {
            // 切换到基础测绘院页面的逻辑
            var allDetails = document.querySelectorAll('.branch-detail');
            allDetails.forEach(function(detail) {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            });
            
            var basicSurveyDetail = document.getElementById('basic-survey-detail');
            if (basicSurveyDetail) {
                basicSurveyDetail.classList.remove('hidden');
                basicSurveyDetail.classList.add('active');
                
                // 延迟重绘图表
                setTimeout(function() {
                    initBasicSurveyRadarChart();
                    resizeBasicSurveyRadarChart();
                }, 250);
            }
        };
        
        // 检查并重新初始化图表的函数
        window.checkAndReinitBasicSurveyRadar = function() {
            if (basicSurveyRadarChart && !basicSurveyRadarChart.isDisposed()) {
                basicSurveyRadarChart.dispose();
            }
            initBasicSurveyRadarChart();
            return basicSurveyRadarChart;
        };
        
    } else {
        console.warn('未找到基础测绘院雷达图容器元素，将在DOMContentLoaded后重试');
        // 延迟重试
        setTimeout(function() {
            if (!document.getElementById('basicSurveyRadarChart')) {
                console.error('基础测绘院雷达图容器仍未找到');
            }
        }, 1000);
    }
} catch (error) {
    console.error('基础测绘院能力雷达图初始化失败:', error);
    // 提供重试机制
    setTimeout(function() {
        try {
            var basicSurveyRadarDom = document.getElementById('basicSurveyRadarChart');
            if (basicSurveyRadarDom) {
                var basicSurveyRadarChart = echarts.init(basicSurveyRadarDom);
                basicSurveyRadarChart.setOption(basicSurveyRadarOption);
                setTimeout(function() {
                    basicSurveyRadarChart.resize();
                }, 100);
            }
        } catch (retryError) {
            console.error('重试初始化基础测绘院雷达图失败:', retryError);
        }
    }, 500);
}

// 将基础测绘院雷达图初始化添加到统一的图表初始化函数中
document.addEventListener('DOMContentLoaded', function() {
    if (typeof echarts !== 'undefined') {
        setTimeout(function() {
            try {
                if (document.getElementById('basicSurveyRadarChart')) {
                    var existingChart = echarts.getInstanceByDom(document.getElementById('basicSurveyRadarChart'));
                    if (!existingChart) {
                        basicSurveyRadarDom = document.getElementById('basicSurveyRadarChart');
                        if (basicSurveyRadarDom) {
                            var basicSurveyRadarChart = echarts.init(basicSurveyRadarDom);
                            basicSurveyRadarChart.setOption(basicSurveyRadarOption);
                        }
                    }
                }
            } catch (error) {
                console.error('基础测绘院雷达图额外初始化失败:', error);
            }
        }, 1000);
    }
});

// 测绘一院能力雷达图初始化
try {
    var surveyOneRadarDom = document.getElementById('surveyOneRadarChart');
    if (surveyOneRadarDom) {
        // 延迟初始化，确保容器已正确显示
        var surveyOneRadarChart = null;
        
        // 测绘一院四个核心能力得分（100分制）- 基于实际数据估算
        var surveyOneData = {
            name: '测绘一院',
            scores: [3.2, 80, 60, 40], // 科技成果、科技质量、人才培养、创新能力
            labels: ['科技成果', '科技质量', '人才培养', '创新能力']
        };
        
        var surveyOneRadarOption = {
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            radar: {
                indicator: [
                    { name: '科技成果', max: 100 },
                    { name: '科技质量', max: 100 },
                    { name: '人才培养', max: 100 },
                    { name: '创新能力', max: 100 }
                ],
                center: ['50%', '50%'],
                radius: '75%',
                axisLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f3f4f6'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(248, 250, 252, 0.5)', 'rgba(255, 255, 255, 0.2)']
                    }
                },
                name: {
                    textStyle: {
                        color: '#6b7280',
                        fontSize: 12,
                        fontWeight: 'bold',
                        padding: [0, 5]
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 12
                },
                padding: [8, 12],
                formatter: function(params) {
                    var index = params.dataIndex;
                    var score = surveyOneData.scores[index];
                    var label = surveyOneData.labels[index];
                    
                    var extraInfo = '';
                    if (label === '科技成果') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">无科研项目、无获奖、无专利，科技成果产出薄弱</span>';
                    } else if (label === '科技质量') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">一次性通过率89%、符合率95%全院领先，但有1次质量事故</span>';
                    } else if (label === '人才培养') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">专家梯队4人，团队年轻（平均35岁），但硕博比例0%需提升</span>';
                    } else if (label === '创新能力') {
                        extraInfo = '<br><span style="color:#666;font-size:11px">软著4项，创新项目48项，但缺乏平台和技术奖项</span>';
                    }
                    
                    return label + ': <span style="font-weight:bold;color:#2563eb">' + score + '分</span>' + extraInfo;
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: surveyOneData.scores,
                    name: surveyOneData.name,
                    areaStyle: {
                        color: 'rgba(37, 99, 235, 0.25)'  // 主蓝色
                    },
                    lineStyle: {
                        color: '#2563eb',  // 主蓝色
                        width: 3
                    },
                    itemStyle: {
                        color: '#2563eb'
                    },
                    symbolSize: 6,
                    label: {
                        show: true,
                        formatter: function(params) {
                            return surveyOneData.scores[params.dataIndex] + '';
                        },
                        color: '#ffffff',
                        fontSize: 10,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        padding: [2, 5],
                        borderRadius: 3
                    }
                }]
            }]
        };
        
        // 初始化图表函数
        function initSurveyOneRadarChart() {
            if (!surveyOneRadarChart || surveyOneRadarChart.isDisposed()) {
                surveyOneRadarChart = echarts.init(surveyOneRadarDom);
                surveyOneRadarChart.setOption(surveyOneRadarOption);
            }
        }
        
        // 重绘图表函数
        function resizeSurveyOneRadarChart() {
            if (surveyOneRadarChart && !surveyOneRadarChart.isDisposed()) {
                var containerVisible = surveyOneRadarDom.offsetWidth > 0 && surveyOneRadarDom.offsetHeight > 0;
                var parentVisible = surveyOneRadarDom.closest('.branch-detail')?.classList.contains('active');
                
                if (containerVisible && parentVisible) {
                    setTimeout(function() {
                        surveyOneRadarChart.resize();
                        surveyOneRadarChart.setOption(surveyOneRadarOption, true);
                    }, 50);
                }
            }
        }
        
        // 使用ResizeObserver监听容器尺寸变化
        if (typeof ResizeObserver !== 'undefined') {
            var resizeObserver = new ResizeObserver(function(entries) {
                for (let entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        if (!surveyOneRadarChart || surveyOneRadarChart.isDisposed()) {
                            initSurveyOneRadarChart();
                        }
                        setTimeout(resizeSurveyOneRadarChart, 100);
                    }
                }
            });
            
            resizeObserver.observe(surveyOneRadarDom);
        }
        
        // 监听页面切换事件
        document.addEventListener('DOMContentLoaded', function() {
            var surveyOneDetail = document.getElementById('survey-one-detail');
            if (surveyOneDetail) {
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            var isVisible = surveyOneDetail.classList.contains('active') && 
                                          !surveyOneDetail.classList.contains('hidden');
                            if (isVisible) {
                                setTimeout(function() {
                                    initSurveyOneRadarChart();
                                    resizeSurveyOneRadarChart();
                                }, 200);
                            }
                        }
                    });
                });
                
                observer.observe(surveyOneDetail, { attributes: true });
            }
            
            setTimeout(initSurveyOneRadarChart, 500);
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            resizeSurveyOneRadarChart();
        });
        
        // 全局函数，供页面切换时调用
        window.showSurveyOneDetailPage = function() {
            var allDetails = document.querySelectorAll('.branch-detail');
            allDetails.forEach(function(detail) {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            });
            
            var surveyOneDetail = document.getElementById('survey-one-detail');
            if (surveyOneDetail) {
                surveyOneDetail.classList.remove('hidden');
                surveyOneDetail.classList.add('active');
                
                setTimeout(function() {
                    initSurveyOneRadarChart();
                    resizeSurveyOneRadarChart();
                }, 250);
            }
        };
        
        // 检查并重新初始化图表的函数
        window.checkAndReinitSurveyOneRadar = function() {
            if (surveyOneRadarChart && !surveyOneRadarChart.isDisposed()) {
                surveyOneRadarChart.dispose();
            }
            initSurveyOneRadarChart();
            return surveyOneRadarChart;
        };
        
    } else {
        console.warn('未找到测绘一院雷达图容器元素，将在DOMContentLoaded后重试');
        setTimeout(function() {
            if (!document.getElementById('surveyOneRadarChart')) {
                console.error('测绘一院雷达图容器仍未找到');
            }
        }, 1000);
    }
} catch (error) {
    console.error('测绘一院能力雷达图初始化失败:', error);
    setTimeout(function() {
        try {
            var surveyOneRadarDom = document.getElementById('surveyOneRadarChart');
            if (surveyOneRadarDom) {
                var surveyOneRadarChart = echarts.init(surveyOneRadarDom);
                surveyOneRadarChart.setOption(surveyOneRadarOption);
                setTimeout(function() {
                    surveyOneRadarChart.resize();
                }, 100);
            }
        } catch (retryError) {
            console.error('重试初始化测绘一院雷达图失败:', retryError);
        }
    }, 500);
}

// 将测绘一院雷达图初始化添加到统一的图表初始化函数中
document.addEventListener('DOMContentLoaded', function() {
    if (typeof echarts !== 'undefined') {
        setTimeout(function() {
            try {
                if (document.getElementById('surveyOneRadarChart')) {
                    var existingChart = echarts.getInstanceByDom(document.getElementById('surveyOneRadarChart'));
                    if (!existingChart) {
                        surveyOneRadarDom = document.getElementById('surveyOneRadarChart');
                        if (surveyOneRadarDom) {
                            var surveyOneRadarChart = echarts.init(surveyOneRadarDom);
                            surveyOneRadarChart.setOption(surveyOneRadarOption);
                        }
                    }
                }
            } catch (error) {
                console.error('测绘一院雷达图额外初始化失败:', error);
            }
        }, 1000);
    }
});
    
    console.log('所有图表初始化完成');
}

// 使用更可靠的初始化方式
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts);
} else {
    // DOM已经加载完成
    setTimeout(initCharts, 100);
}

// 响应窗口大小变化
window.addEventListener('resize', function() {
    // 图表会自动处理重绘
});
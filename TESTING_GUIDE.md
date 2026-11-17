# PCube Website Testing Guide

## How to View the Website

### Option 1: Open Directly in Browser

1. Navigate to the project folder: `Pcube_Website_Round_2`
2. Double-click `index.html` to open in your default browser
3. If that doesn't work, right-click `index.html` → Open With → Choose your browser

### Option 2: Using Live Server (Recommended)

If you have VS Code or a similar editor:

1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"
3. The website will open at `http://localhost:5500` or similar

---

## ✅ What to Test

### 1. Navigation Menu

- [ ] Click each menu item (About, Services, Locations, Trainers, Reviews, Gallery, Franchise, FAQs, Contact)
- [ ] Verify smooth scrolling to each section
- [ ] Test mobile menu (hamburger icon) on mobile/small screens
- [ ] Verify "EXPLORE FRANCHISE" button works
- [ ] Verify "BOOK A VISIT" button works

### 2. About Us Section

- [ ] Read through the complete About Us content
- [ ] Verify founder name is "Devank Nagpal"
- [ ] Check founder image loads correctly
- [ ] Verify the three P Cube pillars are displayed:
  - Physical
  - Physiological
  - Psychological
- [ ] Test hover effects on pillar cards
- [ ] Check readability of founder's story

### 3. Branches/Locations Section

Test each of the 7 branches:

#### AGCR Enclave

- [ ] Branch name displays correctly
- [ ] Branch image loads
- [ ] Address is complete
- [ ] "Now Open" badge shows
- [ ] Instagram link works
- [ ] Gym Tour link works
- [ ] Testimonial link works
- [ ] "Get Directions" opens Google Maps
- [ ] "View Gym" button works
- [ ] Hover effect works on card

#### Model Town, Rohtak

- [ ] All details correct
- [ ] Instagram, Gym Tour, Testimonial links work
- [ ] Google Maps directions work

#### Model Town, Delhi

- [ ] All details correct
- [ ] Instagram and Gym Tour links work
- [ ] Note: No testimonial (correct behavior)

#### Pitampura

- [ ] All details correct
- [ ] All links working

#### Noida Sector 132

- [ ] "Pre-Sales Open" badge shows
- [ ] Instagram link works
- [ ] "Coming Soon" shows for Gym Tour (correct)
- [ ] Address complete

#### Greater Noida West

- [ ] "Pre-Sales Open" badge shows
- [ ] Instagram link works
- [ ] "Coming Soon" shows for Gym Tour (correct)
- [ ] Address complete

#### Faridabad Sector 12

- [ ] "Pre-Sales Open" badge shows
- [ ] Instagram link works
- [ ] "Coming Soon" shows for Gym Tour (correct)
- [ ] Address complete

### 4. Trainers Section

- [ ] All 3 trainer images load correctly
- [ ] Trainer cards show:
  - AGCR Enclave trainer
  - Model Town, Delhi trainer
  - Model Town, Rohtak trainer
- [ ] Hover effects work on trainer cards
- [ ] "BOOK A TRAINING SESSION" button works

### 5. Services Section

- [ ] All 6 services display correctly:
  - Strength & Conditioning
  - Cardio Training
  - Personal Training
  - Pilates & Studio
  - Group Classes
  - Recovery & Relaxation

### 6. Contact Form

- [ ] Form displays correctly
- [ ] Dropdown shows all 7 branches:
  - AGCR Enclave, Delhi
  - Model Town, Rohtak
  - Model Town, Delhi
  - Pitampura, Delhi
  - Noida Sector 132
  - Greater Noida West
  - Faridabad Sector 12
- [ ] Test form submission
- [ ] Verify email draft opens correctly

### 7. Responsive Design Testing

#### Desktop (1280px+)

- [ ] All sections display in multi-column layout
- [ ] Branch cards: 3 columns (or 2 depending on screen width)
- [ ] Trainer cards: 3 columns
- [ ] Navigation menu fully visible
- [ ] No horizontal scrolling
- [ ] All images properly sized

#### Tablet (768px - 1024px)

- [ ] Branch cards adjust to 2 columns
- [ ] Trainer cards adjust to 2 columns
- [ ] Hamburger menu appears
- [ ] Founder section stacks vertically
- [ ] No horizontal scrolling

#### Mobile (< 768px)

- [ ] All content stacks to single column
- [ ] Branch cards: 1 column
- [ ] Trainer cards: 1 column
- [ ] Mobile menu works correctly
- [ ] All buttons are touch-friendly
- [ ] No horizontal scrolling
- [ ] Images scale properly
- [ ] Text is readable (not too small)

### 8. Visual Design Check

- [ ] Blue and gold color scheme consistent throughout
- [ ] All images load without errors
- [ ] No broken image icons
- [ ] Hover effects smooth and professional
- [ ] Spacing and padding consistent
- [ ] Typography clear and readable
- [ ] Buttons have proper styling
- [ ] Cards have proper shadows/borders

### 9. Links & External Resources

- [ ] All Instagram links open in new tab
- [ ] All Google Maps links open in new tab
- [ ] Gym tour links open correctly
- [ ] Testimonial links open correctly
- [ ] Logo image displays
- [ ] All branch images display
- [ ] All trainer images display
- [ ] Founder image displays

### 10. Performance Check

- [ ] Page loads quickly
- [ ] Images load without delay
- [ ] Smooth scrolling performance
- [ ] Hover effects don't lag
- [ ] Mobile performance is good

---

## 🐛 Common Issues & Solutions

### Issue: Images Not Loading

**Solution:** 

- Verify all image paths are correct
- Check that images folder exists with subfolders: branches/, trainers/, founder/
- Ensure images were copied from Static-Files folder

### Issue: Links Not Working

**Solution:**

- Check that you're not viewing the page directly (file://)
- Use a local server (see "Option 2" above)
- Verify internet connection for external links (Instagram, Maps)

### Issue: Mobile Menu Not Opening

**Solution:**

- Check that JavaScript is enabled
- Verify js/main.js file exists
- Test in a different browser

### Issue: Styling Looks Wrong

**Solution:**

- Verify css/styles.css file exists and is linked correctly
- Check browser console for CSS errors (F12 → Console)
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

---

## 📱 Test Devices Recommended

### Desktop Browsers:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

### Mobile Devices:

- ✅ iPhone (Safari)
- ✅ Android phone (Chrome)
- ✅ Tablet (iPad/Android)

### Screen Sizes to Test:

- 1920px (Large desktop)
- 1440px (Desktop)
- 1024px (Tablet landscape)
- 768px (Tablet portrait)
- 414px (Large phone)
- 375px (Standard phone)
- 320px (Small phone)

---

## 🎯 Priority Testing Areas

### High Priority (Must Test):

1. ✅ All 7 branches display correctly
2. ✅ All branch information is accurate
3. ✅ Instagram links work for all branches
4. ✅ About Us content is correct
5. ✅ Mobile responsiveness works
6. ✅ Contact form includes all branches

### Medium Priority (Should Test):

1. ✅ Trainer section displays properly
2. ✅ Gym tour links work where available
3. ✅ Testimonial links work where available
4. ✅ Hover effects are smooth
5. ✅ Google Maps directions work

### Nice to Have (Can Test):

1. ✅ Performance on slow connections
2. ✅ Multiple browser compatibility
3. ✅ Keyboard navigation
4. ✅ Print styling (if needed)

---

## 📝 Feedback Checklist

When reviewing, please note:

### Content Accuracy:

- [ ] Is all branch information correct?
- [ ] Are addresses accurate?
- [ ] Is the About Us story accurate?
- [ ] Are Instagram handles correct?
- [ ] Are trainer specialties accurate?

### Missing Information:

- [ ] Note any missing branch website URLs
- [ ] Note any missing trainer names/credentials
- [ ] Note any incorrect information
- [ ] Note any additional content needed

### Design Preferences:

- [ ] Are colors appropriate?
- [ ] Is spacing good?
- [ ] Are images the right size?
- [ ] Do you want any layout changes?
- [ ] Do you want any additional features?

### Technical Issues:

- [ ] Any broken links?
- [ ] Any missing images?
- [ ] Any layout problems?
- [ ] Any mobile issues?
- [ ] Any performance problems?

---

## 🚀 Quick Browser Test

Open the website and verify:

1. ✅ Page loads completely
2. ✅ No error messages in console (F12)
3. ✅ All sections are visible
4. ✅ All images load
5. ✅ Navigation menu works
6. ✅ Mobile menu works (resize browser)
7. ✅ All buttons are clickable
8. ✅ Contact form works

---

## 📞 What to Report

If you find any issues, please provide:

1. **What section:** (e.g., "Branches Section - Faridabad")
2. **What's wrong:** (e.g., "Address is incorrect")
3. **Expected:** (e.g., "Should be: XYZ")
4. **Device/Browser:** (e.g., "iPhone Safari" or "Chrome Desktop")
5. **Screenshot:** (if possible)

---

## ✅ Sign-Off Checklist

Before approving the website for production:

### Content Review:

- [ ] All branch information verified
- [ ] About Us content approved
- [ ] Trainer information reviewed
- [ ] All links tested and working
- [ ] Contact information correct

### Design Review:

- [ ] Visual design approved
- [ ] Color scheme approved
- [ ] Typography approved
- [ ] Image quality approved
- [ ] Layout approved

### Technical Review:

- [ ] Works on all major browsers
- [ ] Works on mobile devices
- [ ] Performance is acceptable
- [ ] No broken links
- [ ] No broken images

### Client Decisions:

- [ ] Branch website URLs provided
- [ ] Trainer names/credentials provided
- [ ] Any requested changes documented
- [ ] Ready for production deployment

---

## 📧 Contact for Issues

If you encounter any issues during testing, please document:

- Description of issue
- Steps to reproduce
- Browser/device information
- Screenshots if applicable

---

**Testing Date:** _______________

**Tested By:** _______________

**Status:** 

- [ ] Approved
- [ ] Approved with minor changes
- [ ] Requires revisions

**Notes:** 

_____________________________________

_____________________________________

_____________________________________


# Build & Deployment Troubleshooting Guide

## ✅ Pre-Deployment Checklist

Before deploying to Vercel, verify:

1. **All files are saved**
2. **No TypeScript errors** - Run `npm run build` locally
3. **All imports are correct**
4. **Translation keys match** between en.ts and fr.ts

## 🔧 Common Build Errors & Solutions

### Error: "Cannot find module '../contexts/LanguageContext'"

**Cause**: Import path issue  
**Solution**: Verify the file exists at `/contexts/LanguageContext.tsx`

```typescript
// Correct import in UpdatedBookingFormPage.tsx
import { useLanguage } from "../contexts/LanguageContext";
```

### Error: "Property 't' does not exist on type..."

**Cause**: useLanguage hook not properly typed  
**Solution**: Already fixed in `/contexts/LanguageContext.tsx`:

```typescript
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
```

### Error: "Module '"sonner"' has no exported member 'toast'"

**Cause**: Incorrect sonner import  
**Solution**: Already using correct import:

```typescript
import { toast } from "sonner";
```

### Error: "Cannot find name 'useMemo'" or "Cannot find name 'useState'"

**Cause**: Missing React imports  
**Solution**: Already fixed - first line of UpdatedBookingFormPage.tsx:

```typescript
import { useState, useMemo } from "react";
```

## 🚨 If Build Still Fails

### Step 1: Check Node/npm versions
```bash
node --version  # Should be 18.x or higher
npm --version   # Should be 9.x or higher
```

### Step 2: Clear cache and reinstall
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Step 3: Check for duplicate dependencies
```bash
npm ls react
npm ls react-dom
```
If you see multiple versions, fix package.json

### Step 4: Verify all required packages
```json
{
  "dependencies": {
    "react": "^18.x.x",
    "react-dom": "^18.x.x",
    "lucide-react": "latest",
    "sonner": "^2.0.3"
  }
}
```

## 📝 Vercel-Specific Issues

### Error: "Build failed - Type error"

**Solution 1**: Add to vercel.json:
```json
{
  "buildCommand": "npm run build",
  "typescript": {
    "ignoreBuildErrors": false
  }
}
```

**Solution 2**: Check Vercel build logs for specific error line

### Error: "Module not found: Can't resolve './components/...'"

**Cause**: Case sensitivity (Linux/Unix vs Windows)  
**Solution**: Ensure file names match exactly:
- `UpdatedBookingFormPage.tsx` (not `updatedBookingFormPage.tsx`)
- `LanguageSwitch.tsx` (not `languageSwitch.tsx`)

## ✨ Success Indicators

Build is successful when you see:

```bash
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Creating an optimized production build
✓ Collecting page data
✓ Finalizing page optimization
```

## 🔍 Testing Before Deployment

### 1. Local Build Test
```bash
npm run build
npm run start
```

### 2. Test Language Switching
- Navigate to booking form
- Click EN/FR switcher
- Verify all text changes

### 3. Test Package Data
- Book from different packages
- Verify package info displays correctly in both languages

### 4. Check Console
- Open browser DevTools (F12)
- Look for errors in Console tab
- Should see no red errors

## 📦 Files That MUST Exist

Verify these files exist and are error-free:

- ✅ `/components/UpdatedBookingFormPage.tsx`
- ✅ `/components/LanguageSwitch.tsx`
- ✅ `/contexts/LanguageContext.tsx`
- ✅ `/hooks/useDestinationData.ts`
- ✅ `/translations/en.ts`
- ✅ `/translations/fr.ts`
- ✅ `/translations/index.ts`
- ✅ `/types/index.ts`
- ✅ `/App.tsx`

## 🎯 Quick Validation Script

Create a file `validate.js`:

```javascript
const fs = require('fs');

const requiredFiles = [
  './components/UpdatedBookingFormPage.tsx',
  './components/LanguageSwitch.tsx',
  './contexts/LanguageContext.tsx',
  './translations/en.ts',
  './translations/fr.ts',
];

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ MISSING: ${file}`);
  }
});
```

Run with: `node validate.js`

## 💡 Best Practices

1. **Always test locally first**: Run `npm run build` before pushing
2. **Check TypeScript**: Use `npm run type-check` if available
3. **Commit often**: Small commits make debugging easier
4. **Clear deployment**: Use Vercel's "Clear Cache and Redeploy"

## 📞 Still Having Issues?

If you're still encountering errors:

1. **Copy the exact error message** from Vercel build logs
2. **Check the line number** mentioned in the error
3. **Verify that file** matches the examples in this guide
4. **Check for typos** in import paths and component names

---

**Last Updated**: Today  
**Status**: ✅ All known issues documented and resolved
